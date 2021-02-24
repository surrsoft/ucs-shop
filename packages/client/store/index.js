import {
  gqlOrderByIdGet,
  gqlOrderCreate,
  gqlOrderDelete,
  gqlOrdersAllGet,
  gqlProductCreate, gqlProductDelete, gqlProductUpdateMutation
} from '../utils/gql-queries';
import * as _ from 'lodash';
import { utilErrNotifShow } from '../utils/stdutils';


export const state = () => ({
  counter: 0,
  orders: [],
  isOrdersLoading: true,
  isOrderCreating: false,
  isOrderCreateInitial: true,
  orderCurr: undefined
});

const orderByProductId = (productId, isNeedClone) => {
  let ret = undefined;
  if (state.orders && state.orders.length > 0) {
    ret = _.find(state.orders, (order) => {
      return _.find(order.products, (product) => product.id === productId)
    })
    if (isNeedClone) {
      ret = _.cloneDeep(ret)
    }
  }
  return ret;
}

export const actions = {

  async orderByIdGetAction(state, { vm, orderId }) { // TODO 2020-10-06
    const order = await vm.$apollo.query({
      query: gqlOrderByIdGet,
      variables: { orderId },
      fetchPolicy: 'no-cache'
    }).catch(error => {
      console.log('!!-!!-!! error {200929173049}\n', error)
    });
    const order0 = _.get(order, 'data.orderByIdGetResolver')
    state.commit('orderCurrMutation', order0);
  },

  async ordersAllGetAction(ctx, { vm }) {
    return new Promise(async (resolve, reject) => {
      ctx.commit('isOrdersLoadingMutation', true);
      const qu = await vm.$apollo.query({
        query: gqlOrdersAllGet,
        fetchPolicy: 'no-cache'
      }).catch(error => {
        reject(error);
      });
      resolve();
      const orders = _.get(qu, 'data.ordersGet');
      ctx.commit('ordersUpdateMutation', orders || []);
      ctx.commit('isOrdersLoadingMutation', false);
    });
  },

  async orderCreateAction(ctx, { vm, product }) {
    return new Promise(async (resolve, reject) => {
      ctx.commit('isOrderCreatingMutation', true);
      ctx.commit('isOrderCreateInitialMutation', true);
      await vm.$apollo.mutate({
        mutation: gqlOrderCreate,
        variables: {
          input: product
        },
        update: (store, { data }) => {
          const order = _.get(data, 'orderCreate');
          ctx.commit('orderCreateMutation', order);
          ctx.commit('orderCurrMutation', order);
          ctx.commit('isOrderCreateInitialMutation', false);
          resolve();
        }
      }).catch((error) => {
        reject(error);
      }).finally(() => {
        ctx.commit('isOrderCreatingMutation', false);
      });
    });
  },

  async orderDeleteAction(ctx, { vm, orderId }) {
    return new Promise(async (resolve, reject) => {
      const ordersN = _.cloneDeep(ctx.state.orders);
      const loader = vm.$loading.show();
      await vm.$apollo
        .mutate({
          mutation: gqlOrderDelete,
          variables: {
            orderId
          },
          update: (store, { data }) => {
            loader.hide();
            ctx.commit('orderDeleteMutation', _.get(data, 'orderDelete.id'));
          },
        })
        .catch(err => {
          loader.hide();
          utilErrNotifShow(vm, 'Ошибка удаления заказа', err);
          ctx.commit('ordersUpdateMutation', ordersN);
        });
    });
  },

  async productCreateAction(ctx, { vm, orderId, product }) {
    return new Promise(async (resolve, reject) => {
      if (ctx.isOrderCreateInitial) {
        throw new Error('ERR*: [[200929115922]]');
      }
      let productN;
      await vm.$apollo.mutate({
        mutation: gqlProductCreate,
        variables: { orderId, product },
        update: (store, { data }) => {
          productN = _.get(data, 'productCreate');
        }
      }).catch(err => {
        console.log('!!-!!-!! [[200929121637]] err {200929121632}\n', err)
        reject();
      })
      // --- new order get
      const orderNew = await vm.$apollo.query({
        query: gqlOrderByIdGet,
        variables: { orderId },
        fetchPolicy: 'no-cache'
      }).catch(err => {
        console.warn('!!-!!-!! err {201007124807}\n', err)
        reject()
      })
      const nx = _.get(orderNew, 'data.orderByIdGetResolver');
      console.log('!!-!!-!! orderNew {201007125803}\n', orderNew); // del+
      // ---
      ctx.commit('productCreateMutation', { orderId, product: productN, orderNew: nx })
      resolve();
    });

  },

  async productUpdateAction(ctx, { vm, productId, product }) {
    return new Promise((resolve, reject) => {
      vm.$apollo.mutate({
        mutation: gqlProductUpdateMutation,
        variables: { productId, product: _.omit(product, 'id') },
        update: (store, { data }) => {
          const productN = data.productUpdate;
          ctx.commit('productUpdateMutation', productN);
          resolve();
        }
      }).catch(err => {
        console.log('!!-!!-!! ERR** err {201001173337}\n', err)
        reject();
      })
    });
  },

  async productDeleteAction({ commit, state }, { vm, productId }) {
    return new Promise((resolve, reject) => {
      // --- optimistic delete
      const ordersN = _.cloneDeep(state.orders);
      const orderCurrN = _.cloneDeep(state.orderCurr);
      commit('productDeleteMutation', productId);
      // ---
      vm.$apollo.mutate({
        mutation: gqlProductDelete,
        variables: { productId },
        update: () => {
          resolve();
        },
      }).catch(err => {
        console.warn('!!-!!-!! err {201002103708}\n', err);
        commit('ordersRestoreMutation', { orders: ordersN, orderCurr: orderCurrN });
        reject(err);
      })
    });
  }
}

export const mutations = {
  ordersRestoreMutation(state, { orders, orderCurr }) {
    state.orders = orders;
    state.orderCurr = orderCurr;
  },
  orderCreateMutation(state, order) {
    state.orders.unshift(order);
  },
  ordersUpdateMutation(state, orders) {
    this.state.orders = orders
  },
  isOrdersLoadingMutation(state, val) {
    state.isOrdersLoading = val;
  },
  isOrderCreatingMutation(state, val) {
    state.isOrderCreating = val;
  },
  isOrderCreateInitialMutation(state, val) {
    state.isOrderCreateInitial = val;
  },
  orderCurrMutation(state, order) {
    state.orderCurr = order;
  },
  orderDeleteMutation(state, orderId) {
    const newOrders = state.orders.filter(order => order.id !== orderId);
    state.orders = newOrders;
  },
  productCreateMutation(state, { orderId, product, orderNew }) {
    console.log('!!-!!-!! orderId {201007130049}\n', orderId) // del+
    console.log('!!-!!-!! product {201007130049}\n', product) // del+
    console.log('!!-!!-!! orderNew {201007130049}\n', orderNew) // del+
    if (!orderId) {
      console.warn(`!!-!!-!! ERR* {200930105740}:${Date.now()}`);
    }
    if (!product) {
      console.warn(`!!-!!-!! ERR* {200930105806}:${Date.now()}`);
    }
    if (orderId && product) {
      if (state.orderCurr) {
        let orderCurrN = orderNew;
        if (!orderCurrN) {
          orderCurrN = _.cloneDeep(state.orderCurr);
          if (!orderCurrN.products) {
            orderCurrN.products = [];
          }
          orderCurrN.products.push(product);
          state.orderCurr = orderCurrN;
        } else {
          console.log('!!-!!-!! orderNew {201007130049}\n', orderNew) // del+
          state.orderCurr = orderNew;
        }
        // ---
        if (state.orders) {
          const ordersN = _.cloneDeep(state.orders);
          const ixOrder = _.findIndex(ordersN, order => order.id === orderCurrN.id)
          if (ixOrder !== -1) {
            ordersN[ixOrder] = orderCurrN;
            state.orders = ordersN;
          }
        }
        // ---
      }
    }
  },
  productUpdateMutation(state, product) {
    if (state.orderCurr) {
      const orderCurrN = _.cloneDeep(state.orderCurr);
      const ix = _.findIndex(orderCurrN.products, elProduct => elProduct.id === product.id)
      if (ix !== -1) {
        orderCurrN.products[ix] = product;
        state.orderCurr = orderCurrN;
      }
      // ---
      if (state.orders && state.orders.length > 0) {
        const ordersN = _.cloneDeep(state.orders);
        const ixOrder = _.findIndex(ordersN, order => order.id === orderCurrN.id)
        if (ixOrder !== -1) {
          state.orders = ordersN[ixOrder] = orderCurrN;
        }
      }
    }
  },

  productDeleteMutation(state, productId) {
    if (state.orderCurr) {
      const orderCurrN = _.cloneDeep(state.orderCurr);
      orderCurrN.products = _.filter(orderCurrN.products, product => product.id !== productId);
      state.orderCurr = orderCurrN;
      // ---
      if (state.orders && state.orders.length > 0) {
        state.orders = _.map(state.orders, order => order.id === orderCurrN.id ? orderCurrN : order)
      }
    }
  },
}
