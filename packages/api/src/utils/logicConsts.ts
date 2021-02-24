export function cstNameByCode(cstAll, code) {
  const nx = cstAll.find(el => el.code === code)
  return nx ? nx.name : undefined;
}

// --- статусы заказа; SYNC [[200925161700]]
// заказ ещё формируется пользователем (не отправлялся на выставление итоговой цены)
export const CST_ORDER_STATUS__FORMING = {code: 'order_status__forming', name: 'неоконченное оформление'};
// заказ проверяется владельцем сайта
export const CST_ORDER_STATUS__VERIFING = {code: 'order_status__verifing', name: 'ожидает проверки'};
// заказ ожидает оплаты пользователя
export const CST_ORDER_STATUS__WAIT_PAY = {code: 'order_status__wait_pay', name: 'ожидает оплаты'};
// пользователь оплатил заказ
export const CST_ORDER_STATUS__PAYOK = {code: 'order_status__payok', name: 'оплачен'};
// магазину товар оплачен, ожидается подтверждение и отправка посреднику
export const CST_ORDER_STATUS__TOSHOP_PAYOK = {code: 'order_status__toshop_payok', name: 'ожидание ответа магазина'};
// магазин подтвердил оплату, запущена доставка посреднику
export const CST_ORDER_STATUS__DELIV_TO_MEDIATOR = {
  code: 'order_status__deliv_to_mediator',
  name: 'доставка посреднику'
};
// заказ собирается посредником
export const CST_ORDER_STATUS__BUILD = {code: 'order_status__build', name: 'собирается посредником'};
// заказ отправлен в Россию
export const CST_ORDER_STATUS__SENDED_TO_RUS = {code: 'order_status__sended_to_rus', name: 'отправлен в Россию'};
// заказ доставлен в шоурум
export const CST_ORDER_STATUS__AT_SHOWROOM = {code: 'order_status__at_showroom', name: 'доставлен в шоурум'};
// заказ доставляетя по России
export const CST_ORDER_STATUS__DELIV_AT_RUS = {code: 'order_status__deliv_at_rus', name: 'доставляется по России'};
// заказ доставлен получателю
export const CST_ORDER_STATUS__DONE = {code: 'order_status__done', name: 'заказ выдан'};
// товар распродан или покупатель отказался от заказа
export const CST_ORDER_STATUS__CANCEL = {code: 'order_status__cancel', name: 'отмена'};
// с заказом возникла какая-либо трудность: необходимо зайти в ЛК и посмотреть сообщение от администратора в заказе
export const CST_ORDER_STATUS__PROBLEM = {code: 'order_status__problem', name: 'возника проблема'};

export const CST_ORDER_STATUS__ALL = [
  CST_ORDER_STATUS__FORMING,
  CST_ORDER_STATUS__VERIFING,
  CST_ORDER_STATUS__WAIT_PAY,
  CST_ORDER_STATUS__PAYOK,
  CST_ORDER_STATUS__TOSHOP_PAYOK,
  CST_ORDER_STATUS__DELIV_TO_MEDIATOR,
  CST_ORDER_STATUS__BUILD,
  CST_ORDER_STATUS__SENDED_TO_RUS,
  CST_ORDER_STATUS__AT_SHOWROOM,
  CST_ORDER_STATUS__DELIV_AT_RUS,
  CST_ORDER_STATUS__DONE,
  CST_ORDER_STATUS__CANCEL,
  CST_ORDER_STATUS__PROBLEM,
];

// --- категории товара; SYNC [[200923131900]]
export const CST_PRODCAT__MAN = {code: 'prodcat__man', name: 'Мужское'};
export const CST_PRODCAT__WOMAN = {code: 'prodcat__woman', name: 'Женское'};
export const CST_PRODCAT__CHILDREN = {code: 'prodcat__children', name: 'Детское'};
export const CST_PRODCAT__ACCESSORY = {code: 'prodcat__accessory', name: 'Аксессуары'};
export const CST_PRODCAT__COSMETIC = {code: 'prodcat__cosmetic', name: 'Косметика'};

// SYNC [[200910130300]]
export const CST_PRODCAT__ALL = [
  CST_PRODCAT__MAN,
  CST_PRODCAT__WOMAN,
  CST_PRODCAT__CHILDREN,
  CST_PRODCAT__ACCESSORY,
  CST_PRODCAT__COSMETIC
];

// --- подкатегории товара; SYNC [[200923161100]]
export const CST_PRODSUBCAT__UNDERPANTS = {code: 'prodsubcat__underpants', name: 'Трусы'};
export const CST_PRODSUBCAT__TSHIRT = {code: 'prodsubcat__tshirt', name: 'Футболка'};
export const CST_PRODSUBCAT__SHIRT = {code: 'prodsubcat__shirt', name: 'Рубашка'};
export const CST_PRODSUBCAT__TRACKSUIT = {code: 'prodsubcat__tracksuit', name: 'Спортивный костюм'};
export const CST_PRODSUBCAT__COSTUME = {code: 'prodsubcat__costume', name: 'Костюм'};
export const CST_PRODSUBCAT__JEANS = {code: 'prodsubcat__jeans', name: 'Джинсы'};
export const CST_PRODSUBCAT__SHORTS = {code: 'prodsubcat__shorts', name: 'Шорты'};
export const CST_PRODSUBCAT__HOODY = {code: 'prodsubcat__hoody', name: 'Толстовка'};
export const CST_PRODSUBCAT__JACKETAUTUMN = {code: 'prodsubcat__jacketautumn', name: 'Куртка осенняя'};
export const CST_PRODSUBCAT__JACKETWINTER = {code: 'prodsubcat__jacketwinter', name: 'Куртка зимняя'};
export const CST_PRODSUBCAT__COAT = {code: 'prodsubcat__coat', name: 'Пальто'};
export const CST_PRODSUBCAT__SLIPPERS = {code: 'prodsubcat__slippers', name: 'Тапки'};
export const CST_PRODSUBCAT__SNEAKERS = {code: 'prodsubcat__sneakers', name: 'Кеды'};
export const CST_PRODSUBCAT__CROSS = {code: 'prodsubcat__cross', name: 'Кроссовки'};
export const CST_PRODSUBCAT__BOOTS = {code: 'prodsubcat__boots', name: 'Ботинки'};
export const CST_PRODSUBCAT__SWEATSHIRT = {code: 'prodsubcat__sweatshirt', name: 'Свитшот'};
export const CST_PRODSUBCAT__SWEATER = {code: 'prodsubcat__sweater', name: 'Свитер'};
export const CST_PRODSUBCAT__HIMSELF = {code: 'prodsubcat__himself', name: 'Худи'};
export const CST_PRODSUBCAT__LONGS = {code: 'prodsubcat__longs', name: 'Лонги'};
export const CST_PRODSUBCAT__SHOES = {code: 'prodsubcat__shoes', name: 'Туфли'};
export const CST_PRODSUBCAT__DRESS = {code: 'prodsubcat__dress', name: 'Платье'};
export const CST_PRODSUBCAT__SKIRT = {code: 'prodsubcat__skirt', name: 'Юбка'};
export const CST_PRODSUBCAT__BALLETSHOES = {code: 'prodsubcat__balletshoes', name: 'Балетки'};
export const CST_PRODSUBCAT__BRA = {code: 'prodsubcat__bra', name: 'Бюстгалтер'};
export const CST_PRODSUBCAT__LEGGINGS = {code: 'prodsubcat__leggings', name: 'Леггинсы'};
export const CST_PRODSUBCAT__SWIMSUIT = {code: 'prodsubcat__swimsuit', name: 'Купальник'};
export const CST_PRODSUBCAT__BACKPACK = {code: 'prodsubcat__backpack', name: 'Рюкзак'};
export const CST_PRODSUBCAT__BAG = {code: 'prodsubcat__bag', name: 'Сумка'};
export const CST_PRODSUBCAT__BELT = {code: 'prodsubcat__belt', name: 'Ремень'};
export const CST_PRODSUBCAT__CAP = {code: 'prodsubcat__cap', name: 'Шапка'};
export const CST_PRODSUBCAT__CASE = {code: 'prodsubcat__case', name: 'Чехлы'};
export const CST_PRODSUBCAT__CLUTCH = {code: 'prodsubcat__clutch', name: 'Клатч'};
export const CST_PRODSUBCAT__CROSSBODY = {code: 'prodsubcat__crossbody', name: 'Кроссбоди'};
export const CST_PRODSUBCAT__DECORATION = {code: 'prodsubcat__decoration', name: 'Украшение'};
export const CST_PRODSUBCAT__GLASSES = {code: 'prodsubcat__glasses', name: 'Очки'};
export const CST_PRODSUBCAT__GLOVES = {code: 'prodsubcat__gloves', name: 'Перчатки'};
export const CST_PRODSUBCAT__PURSE = {code: 'prodsubcat__purse', name: 'Кошелек'};
export const CST_PRODSUBCAT__SCARF = {code: 'prodsubcat__scarf', name: 'Шарф'};
export const CST_PRODSUBCAT__WATCH = {code: 'prodsubcat__watch', name: 'Часы'};
export const CST_PRODSUBCAT__COSMETIC = {code: 'prodsubcat__cosmetic', name: 'Косметика'};

// SYNC [[200910130401]]
export const CST_PRODSUBCAT__ALL = [
  CST_PRODSUBCAT__UNDERPANTS,
  CST_PRODSUBCAT__TSHIRT,
  CST_PRODSUBCAT__SHIRT,
  CST_PRODSUBCAT__TRACKSUIT,
  CST_PRODSUBCAT__COSTUME,
  CST_PRODSUBCAT__JEANS,
  CST_PRODSUBCAT__SHORTS,
  CST_PRODSUBCAT__HOODY,
  CST_PRODSUBCAT__JACKETAUTUMN,
  CST_PRODSUBCAT__JACKETWINTER,
  CST_PRODSUBCAT__COAT,
  CST_PRODSUBCAT__SLIPPERS,
  CST_PRODSUBCAT__SNEAKERS,
  CST_PRODSUBCAT__CROSS,
  CST_PRODSUBCAT__BOOTS,
  CST_PRODSUBCAT__SWEATSHIRT,
  CST_PRODSUBCAT__SWEATER,
  CST_PRODSUBCAT__HIMSELF,
  CST_PRODSUBCAT__LONGS,
  CST_PRODSUBCAT__SHOES,
  CST_PRODSUBCAT__DRESS,
  CST_PRODSUBCAT__SKIRT,
  CST_PRODSUBCAT__BALLETSHOES,
  CST_PRODSUBCAT__BRA,
  CST_PRODSUBCAT__LEGGINGS,
  CST_PRODSUBCAT__SWIMSUIT,
  CST_PRODSUBCAT__BACKPACK,
  CST_PRODSUBCAT__BAG,
  CST_PRODSUBCAT__BELT,
  CST_PRODSUBCAT__CAP,
  CST_PRODSUBCAT__CASE,
  CST_PRODSUBCAT__CLUTCH,
  CST_PRODSUBCAT__CROSSBODY,
  CST_PRODSUBCAT__DECORATION,
  CST_PRODSUBCAT__GLASSES,
  CST_PRODSUBCAT__GLOVES,
  CST_PRODSUBCAT__PURSE,
  CST_PRODSUBCAT__SCARF,
  CST_PRODSUBCAT__WATCH,
  CST_PRODSUBCAT__COSMETIC,
];

// --- варианты доставки; [[200929105600]]
export const CST_DELIVERY_TYPE__SDEK_SELF = {code: 'delivery_type__sdek_self', name: 'самовывоз из пункта выдачи СДЭК'};
export const CST_DELIVERY_TYPE__SDEK_COURIER = {code: 'delivery_type__sdek_courier', name: 'доставка курьером СДЭК'};
export const CST_DELIVERY_TYPE__RUSPOST = {code: 'delivery_type__ruspost', name: 'доставка через Почта России'};
export const CST_DELIVERY_TYPE__SHOWROOM = {
  code: 'delivery_type__showroom',
  name: 'самовывоз из шоурума в Нижнем Новгороде'
};

export const CST_DELIVERY_TYPE_ALL = [
  CST_DELIVERY_TYPE__SDEK_SELF,
  CST_DELIVERY_TYPE__SDEK_COURIER,
  CST_DELIVERY_TYPE__RUSPOST,
  CST_DELIVERY_TYPE__SHOWROOM
];
