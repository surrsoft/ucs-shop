<template>
  <div style="padding: 32px 24px 15px">
    <div class="nc-text-1">Новый заказ</div>
    <div style="height: 40px"></div>
    <div style="display: flex; align-items: center; gap: 33px">
      <div class="nc-text-2">Шаг 1</div>
      <div class="nc-text-3">Формирование корзины заказа</div>
    </div>
    <div style="height: 24px"></div>

    <!-- Корзина -->
    <div>
      <div class="nc-text-4">Корзина заказа {{order ? `${order.orderNumber} от ${order.dateString}` : ''}}</div>
      <div v-if="order">
        <NcOrderProductB
          v-for="(elProduct, ix) in order.products"
          :key="ix"
          :product="elProduct"
          @product-edit-1606="handleProductEdit"
          @product-delete-1606="handleProductDelete"
        />
      </div>
    </div>

    <div v-if="!showFormB" style="margin-top: 16px">
      <a-button
        @click="handleProductAdd"
        style="width: 100%"
        :type="!isOrderFilled ? 'primary': 'normal'"
      >
        Добавить товар +
      </a-button>
    </div>

    <div style="height: 16px"></div>
    <div id="inf-t51" v-if="!showFormB" style="display: flex; justify-content: flex-end">
      <div style="flex: 0 0 465px; margin-right: 16px;">
        <div class="t51-elem-n">
          <div class="t51-text-3n">Товаров:</div>
          <div class="t51-text-3n">{{(order || {}).products ? order.products.length : 0}}</div>
        </div>
        <div style="height: 24px"></div>
        <div class="t51-elem-n">
          <div class="t51-text-3n">Сумма товаров:</div>
          <div class="t51-text-3n">{{computedCost}}</div>
        </div>
        <div style="height: 24px"></div>
        <div class="t51-elem-n">
          <div class="t51-text-3n">Таможенная пошлина:</div>
          <div class="t51-text-3n">{{computedCostDuty}}</div>
        </div>
        <div style="height: 24px"></div>
        <div class="t51-elem-n">
          <div class="t51-text-4n"><b>Итого к оплате:</b></div>
          <div class="t51-text-4n"><b>{{computedCostTotalRub}}</b></div>
        </div>
        <div v-if="!showFormB && isOrderFilled">
          <div style="height: 24px"></div>
          <a-button type="primary" style="width: 100%">Шаг 2: Доставка</a-button>
        </div>
        <div style="height: 11px"></div>
      </div>
    </div>

    <div v-if="showFormB">
      <div style="height: 24px"></div>
      <NcLabelB>Вставьте ссылку на товар с сайта магазина и укажите параметры</NcLabelB>

      <div style="height: 8px"></div>
      <NcProductForm
        :product="productAtForm"
        v-on:product-event-1630="handleProductEvent"
        v-on:cancel-event-1516="handleProductFormCancel"
        :is-initial="false"
        @callbackForm1256="callbackForm"
      />
    </div>

  </div>
</template>

<!-- [[201001130600]] -->
<script>
  import NcLabelB from '../../components/NcLabelB';
  import NcProductForm from '../../components/NcProductForm';
  import NcOrderProductB from '../../components/NcOrderProductB';
  import { utilNumberAsMoneyRub, utilNumberFrom } from '../../utils/stdutils';
  import { CST_ORDER_NEW_ROUTE } from '../../utils/consts';
  import { get } from 'lodash';

  export default {
    layout: 'lay_cabinet',
    components: {
      NcOrderProductB,
      NcLabelB,
      NcProductForm,
    },
    data() {
      return {
        showFormB: true,
        productAtForm: undefined,
        cbForm: undefined,
        debugQuery: undefined
      }
    },
    created() {
      const orderId = this.$route.params.index;
      if (orderId === CST_ORDER_NEW_ROUTE || orderId === '' || orderId === '/') {
        this.$store.commit('isOrderCreateInitialMutation', true);
        this.$store.commit('orderCurrMutation', undefined);
      } else {
        this.showFormB = false;
        this.$store.commit('isOrderCreateInitialMutation', false);
        this.$store.dispatch('orderByIdGetAction', { vm: this, orderId });
      }
    },
    computed: {
      isOrderCreateInitial: function () {
        return this.$store.state.isOrderCreateInitial;
      },
      order: function () {
        return this.$store.state.orderCurr;
      },
      mt58: function () {
        return (get(this.order, 'products.length') || 0) < 1;
      },
      isOrderFilled() {
        return this.order && this.order.products && this.order.products.length > 0
      },
      computedCost() {
        return utilNumberAsMoneyRub((this.order || {}).productsCostSumRub) || ''
      },
      computedCostDuty() {
        return utilNumberAsMoneyRub((this.order || {}).duty) || ''
      },
      computedCostTotalRub() {
        return utilNumberAsMoneyRub((this.order || {}).costTotalRub) || ''
      }
    },
    methods: {
      mtProductAddAfter(loader, isSuccess) {
        if (loader) {
          loader.hide();
        }
        if (isSuccess) {
          this.showFormB = false;
        }
      },
      mtErrNotifShow(err) {
        this.$notification.open({
          message: 'Ошибка',
          description: err.message,
          duration: 60,
          type: 'error'
        });
      },
      mtWrap(promise, loader) {
        promise
          .then(() => {
            this.mtProductAddAfter(loader, true);
          })
          .catch(err => {
            this.mtProductAddAfter(loader);
            this.mtErrNotifShow(err);
          });
      },
      handleProductEvent(val) {
        const product = val.data;
        const isEdit = val.isEditMode;

        // see [200925154400]
        const productInput = { ...product, costDollar: utilNumberFrom(product.costDollar) };
        const _th = this;
        const loader = this.$loading.show({
          container: null
        });
        if (this.isOrderCreateInitial) {
          this.mtWrap(
            this.$store.dispatch('orderCreateAction', { vm: this, product: productInput }),
            loader
          )
        } else {
          if (!isEdit) {
            this.mtWrap(
              this.$store.dispatch(
                'productCreateAction',
                { vm: this, orderId: this.order.id, product: productInput }
              ),
              loader
            )
          } else {
            this.mtWrap(
              this.$store.dispatch('productUpdateAction', { vm: this, productId: product.id, product: productInput }),
              loader
            )
          }
        }
      },
      handleProductAdd() {
        this.productAtForm = undefined;
        this.showFormB = true;
      },
      handleProductFormCancel() {
        this.showFormB = false;
      },
      handleProductEdit(product) {
        this.showFormB = true;
        this.productAtForm = product;
      },
      handleProductDelete(product) {
        const loader = this.$loading.show({
          container: null
        });
        this.$store.dispatch('productDeleteAction', { vm: this, productId: product.id })
          .then(() => {
            this.productAtForm = undefined;
            // --- clear form
            if (this.cbForm) {
              this.cbForm();
            }
            // --- hide form
            this.showFormB = false;
          })
          .catch(err => this.mtErrNotifShow(err))
          .finally(() => loader.hide())
      },
      callbackForm(cb) {
        this.cbForm = cb;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/main";

  * {
    font-family: 'Montserrat Alternates', monospace;
    // outline: 1px solid rgba(0, 0, 0, 0.2);
  }

  .nc-text-1 {
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    color: rgba(0, 0, 0, 0.85);
  }

  .nc-text-2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #1890FF;
  }

  .nc-text-3 {
    font-size: 14px;
    line-height: 16px;
    color: #1890FF;
  }

  .nc-text-4 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.85);
  }

  .t51-elem-n {
    display: flex;
    justify-content: space-between
  }

  .t51-text-3n {
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.65);
  }

  .t51-text-4n {
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.65);
  }

</style>
