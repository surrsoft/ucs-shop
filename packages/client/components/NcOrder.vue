<template>
  <div style="width: 100%;">
    <div
      class="nc-hover-1"
      style="display: flex; gap: 16px; align-items: center; height: 56px;"
      @click="isOpen = !isOpen"
    >
      <div class="nc-text-1">
        {{order.name}}
      </div>
      <div class="nc-text-2">
        От {{order.dateString}}
      </div>
      <StbBtnB2
        :state="isOpen ? 'pressed' : 'normal'"
        v-bind="btnData()"
      />
      <NcLabel
        :text="order.statusName"
        style="margin-left: auto"
      />
    </div>

    <div id="infProductsAnd" v-if="isOpen">
      <a-button @click="handleOrderEdit" size="small">изменить</a-button>
      <a-popconfirm
        title="Удаление заказа"
        ok-text="Удалить"
        cancel-text="Отмена"
        @confirm="handleOrderDelete"
      >
        <a-button size="small">удалить</a-button>
      </a-popconfirm>

      <!-- products -->
      <div style="height: 16px"></div>
      <div v-if="order.products && order.products.length > 0">
        <NcOrderProduct
          v-for="(product, ix) in order.products"
          :key="ix"
          :product="product"
          :isDollar="isDollar"
        />
      </div>

      <div style="height: 24px"></div>
      <div :class="{'nc-last': isLast}" style="display: flex; justify-content: space-between; align-items: start">
        <div style="flex-grow: 1; margin-left: 16px;">
          <div v-if="order.deliveryType" class="nc-text-3" style="margin-bottom: 24px;">{{order.deliveryTypeName}}</div>
          <div v-if="order.deliveryAddress" class="nc-text-3" style="margin-bottom: 24px;">{{order.deliveryAddress}}
          </div>
          <div><a href="/">Отследить посылку</a></div>
        </div>

        <!-- right block -->
        <div style="flex: 0 0 465px; margin-right: 16px;">
          <div class="nc-elem">
            <div class="nc-text-3">Товаров:</div>
            <div class="nc-text-3">{{order.products ? order.products.length : 0}}</div>
          </div>
          <div style="height: 24px"></div>
          <div class="nc-elem">
            <div class="nc-text-3">Сумма товаров:</div>
            <div class="nc-text-3">{{computedCostB}}</div>
          </div>
          <div style="height: 24px"></div>
          <div class="nc-elem">
            <div class="nc-text-3">Таможенная пошлина:</div>
            <div class="nc-text-3">{{order.duty || ''}} ₽</div>
          </div>
          <div style="height: 24px"></div>
          <div class="nc-elem">
            <div class="nc-text-4"><b>Итого к оплате:</b></div>
            <div class="nc-text-4"><b>{{computedCostC}}</b></div>
          </div>
          <div style="height: 11px"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import NcLabel from './NcLabel';
  import StbBtnB2 from './std/StbBtnB2';
  import NcOrderProduct from './NcOrderProduct';
  import { CST_ORDER_STATUS__FORMING } from '../utils/buslogic';
  import { utilNumberAsMoneyRub } from '../utils/stdutils';

  export default {
    components: { NcOrderProduct, StbBtnB2, NcLabel },
    props: {
      order: Object
    },
    data() {
      return {
        isOpen: false,
        isLast: false
      }
    },
    methods: {
      btnData() {
        return {
          stateAtPressed: 'pressed',
          isToggleMode: true,
          states: [
            {
              name: 'normal',
              propData: {
                imgNormal: '/a1/btn-shevron-down.svg'
              }
            },
            {
              name: 'pressed',
              propData: {
                imgNormal: '/a1/btn-shevron-up.svg'
              }
            }
          ]
        }
      },
      handleOrderDelete() {
        this.$store.dispatch('orderDeleteAction', { vm: this, orderId: this.order.id })
      },
      handleOrderEdit() {
        this.$router.push(`/order/${this.order.id}`)
      }
    },
    computed: {
      isDollar() {
        return this.order.status === CST_ORDER_STATUS__FORMING.code;
      },
      computedCostB() {
        return utilNumberAsMoneyRub(this.order.productsCostSumRub) || ''
      },
      computedCostC() {
        return utilNumberAsMoneyRub(this.order.costTotalRub) || ''
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/main";

  * {
    // outline: 1px solid rgba(0, 0, 0, 0.1);
    font-family: 'Montserrat Alternates', monospace;
  }

  .nc-text-1 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.85);
  }

  .nc-text-2 {
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.25);
  }

  .nc-text-3 {
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.65);
  }

  .nc-text-4 {
    font-size: 14px;
    line-height: 17px;
    color: rgba(0, 0, 0, 0.65);
  }

  .nc-elem {
    display: flex;
    justify-content: space-between
  }

  .nc-hover-1 {
    cursor: pointer;
  }

  .nc-last {
    padding-bottom: 48px;
  }
</style>
