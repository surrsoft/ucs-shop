<template>
  <div class="nc-main" style="position: relative">
    <div class="nc-title">{{pageTitle}}</div>
    <a-button
      v-if="orders && orders.length > 0"
      class="nc-btn-neworder-pos nc-btn-neworder"
      type="primary"
      @click="handleNewOrder"
    >
      Новый заказ
    </a-button>

    <div style="height: 25px"></div>
    <div
      v-if="orders && orders.length > 0"
      class="nc-orders"
    >
      <NcOrder
        v-for="(order, ix) in orders"
        :key="ix"
        :order="order"
        :is-last="ix === orders.length - 1"
      />
    </div>
    <div v-else-if="!isLoading">
      <a-button
        class="nc-btn-neworder"
        style="margin-left: 24px;"
        type="primary"
        @click="handleNewOrder"
      >
        Новый заказ
      </a-button>
    </div>

    <div style="height: 101px"></div>
    <div class="nc-text-1" @click="handleClickFaq">Что означает этот статус, где мой товар?</div>
  </div>
</template>

<script>
  import NcNavbar from '../../components/NcNavbar';
  import NcOrder from '../../components/NcOrder';
  import { CST_ORDER_NEW_ROUTE } from '../../utils/consts';

  export default {
    layout: 'lay_cabinet',
    components: {
      NcNavbar,
      NcOrder
    },
    data() {
      return {
        pageTitle: 'Мои заказы',
        pageMenu: [{ name: 'Мои заказы', isActive: true }, { name: 'Профиль', isActive: false }],
        loadingQueriesCount: 0
      }
    },
    mounted() {
      const loader = this.$loading.show({
        container: null
      });
      this.$store.dispatch('ordersAllGetAction', { vm: this })
        .then(() => {
          loader.hide();
        })
        .catch(err => {
          loader.hide();
          this.$notification.open({
            message: 'Ошибка получения списка заказов',
            description: err.message,
            onClick: () => {
              console.log('Notification Clicked!');
            },
            duration: 60,
            type: 'error'
          });
        })
    },
    computed: {
      orders: function () {
        const orders = this.$store.state.orders;
        return orders;
      },
      isLoading: function () {
        return this.$store.state.isOrdersLoading;
      }
    },
    methods: {
      handleClickFaq() {
        this.$router.push('/faq')
      },
      handleNewOrder() {
        // to [201001130600]
        this.$router.push(`/order/${CST_ORDER_NEW_ROUTE}`)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/main";

  * {
    // outline: 1px rgba(0, 0, 0, 0.15) solid;
    font-family: 'Montserrat Alternates', monospace;
  }

  .nc-main {
    padding: 32px 24px 15px;
  }

  .nc-title {
    font-weight: bold;
    font-size: 38px;
    line-height: 46px;
    color: rgba(0, 0, 0, 0.85);
  }

  .nc-btn-neworder-pos {
    position: absolute;
    top: 39px;
    right: 24px;

  }

  .nc-btn-neworder {
    width: 172px;
    font-family: 'Montserrat Alternates', monospace;
    font-size: 14px;
    line-height: 16px;
  }

  .nc-text-1 {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #1890FF;

    &:hover {
      text-decoration-line: none;
      cursor: pointer;
    }
  }
</style>

