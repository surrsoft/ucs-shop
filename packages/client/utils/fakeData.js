import { CodeName, CST_PRODCAT__ACCESSORY, CST_PRODSUBCAT__BAG, Order, Product } from './buslogic';

export const fakeProduct1 = new Product({
  name: 'Elle Hobo In Signature Canvas',
  prodcat: CST_PRODCAT__ACCESSORY,
  prodsubcat: CST_PRODSUBCAT__BAG,
  size: '32',
  color: 'blue',
  url: 'https://www.coachoutlet.com/39527.html?dwvar_39527_color=IMAA8',
  costRub: 7932
});
export const fakeProduct2 = new Product({
  name: 'Champion Classic Jersey Graphic Tee',
  prodcat: new CodeName('man', 'Мужское'),
  prodsubcat: new CodeName('jeans', 'джинсы'),
  size: '36',
  color: 'light green',
  url: 'https://www.coachoutlet.com/39527.html?dwvar_39527_color=IMAA8',
  costRub: 17970
});

export const fakeOrder1 = new Order({
  name: 'Заказ №308',
  orderNumber: 308,
  date: '13.09.2020',
  status: new CodeName('wait_paid', 'Ожидает оплаты'),
  deliveryType: new CodeName('showroom-nn', 'Самовывоз из шоурума в Нижнем Новгороде'),
  deliveryAddress: 'Санкт-Петербург, ул. Ушинского, 2 корп. 1, 16-Н',
  productsCostSumRub: 62607,
  costTotalRub: 62927,
  duty: 320,
  products: [
    fakeProduct1,
    fakeProduct2,
    new Product({
      name: 'Champion Classic Jersey Graphic Tee',
      prodcat: new CodeName('man', 'Мужское'),
      prodsubcat: new CodeName('jeans', 'джинсы'),
      size: '',
      color: 'красный',
      url: 'https://www.coachoutlet.com/39527.html?dwvar_39527_color=IMAA8',
      costRub: 36705
    }),
  ]
});

export const fakeOrder2 = new Order({
  name: 'Заказ №309',
  orderNumber: 309,
  date: '05.09.2020',
  status: new CodeName('paided', 'Оплачено'),
  deliveryType: new CodeName('showroom-nn', 'Самовывоз из шоурума в Нижнем Новгороде'),
  deliveryAddress: 'Санкт-Петербург, ул. Ушинского, 2 корп. 1, 16-Н',
});

export const fakeOrder3 = new Order({
  name: 'Заказ №310',
  orderNumber: 310,
  date: '03.09.2020',
  status: new CodeName('sended', 'Товар отправлен почтовой службой до вашего адреса'),
  deliveryType: new CodeName('showroom-nn', 'Самовывоз из шоурума в Нижнем Новгороде'),
  deliveryAddress: 'Санкт-Петербург, ул. Ушинского, 2 корп. 1, 16-Н',
});

export const fakeOrders1 = [
  fakeOrder1,
  fakeOrder2,
  fakeOrder3
];
