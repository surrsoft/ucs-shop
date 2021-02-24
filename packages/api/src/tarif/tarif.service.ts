import { HttpService, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ITarif } from './interfaces/tarif.interface';
import { InjectModel } from '@nestjs/mongoose';
import {
  COLL_TARIF,
  RZXX__COMMENT,
  RZXX__COSTINRUS,
  RZXX__COSTTORUS,
  RZXX__MARKUP,
  RZXX__PRODCAT,
  RZXX__PRODSUBCAT,
  RZXX__WEIGHT
} from '../consts';
import { ResultCurrencyUSD, TarifDto } from './dto/tarif.dto';
import { Result } from '../users/users.schema.gql';
import * as csvtojson from 'csvtojson';
import * as path from 'path';
import { stdIdGet, stdStringToNumber } from '../utils/utils';
import { ProductsService } from '../products/products.service';
import { OrdersService } from '../orders/orders.service';
import { OrderCreateDto } from '../orders/dto/order.dto';
import * as lc from '../utils/logicConsts';
import { CST_DELIVERY_TYPE__SDEK_SELF } from '../utils/logicConsts';
import { ProductDto } from '../products/dto/product.dto';
import * as _ from 'lodash';
import { CostTotalRub, CostTotalRubInfo, UsdCurrency } from '../dto/dto';


@Injectable()
export class TarifService {
  constructor(
    @InjectModel(COLL_TARIF) private readonly tarifModel: Model<ITarif>,
    private readonly productsService: ProductsService,
    private readonly ordersService: OrdersService,
    private httpService: HttpService
  ) {
  }

  async debugFill() {
    // ---
    const json = await csvtojson()
      .fromFile(path.join(path.resolve(), 'src/tarif/tarifs.csv'))
    // --- remove all entries
    await this.tarifModel.deleteMany({});
    // ---
    for (const elem of json) {
      await this.tarifModel.create(new TarifDto({
        [RZXX__PRODCAT]: elem[RZXX__PRODCAT],
        [RZXX__PRODSUBCAT]: elem[RZXX__PRODSUBCAT],
        [RZXX__COSTTORUS]: stdStringToNumber(elem[RZXX__COSTTORUS]),
        [RZXX__COSTINRUS]: stdStringToNumber(elem[RZXX__COSTINRUS]),
        [RZXX__MARKUP]: stdStringToNumber(elem[RZXX__MARKUP]),
        [RZXX__WEIGHT]: stdStringToNumber(elem[RZXX__WEIGHT]),
        [RZXX__COMMENT]: elem[RZXX__COMMENT],
      }))
    }
    // --- ---
    await this.ordersService.ordersDeleteAll();
    await this.productsService.productsDeleteAll();
    // --- order 1
    await this.order1Create();
    await this.order2Create();
    await this.order3Create();

    // --- ---
    return new Result();
  }

  private async order1Create() {
    const ord = new OrderCreateDto()
    ord.orderNumber = 308;
    ord.name = 'Заказ №' + ord.orderNumber;
    ord.date = new Date(2020, 8, 13);
    ord.status = lc.CST_ORDER_STATUS__FORMING.code;
    ord.deliveryAddress = 'Санкт-Петербург, ул. Ушинского, 2 корп. 1, 16-Н';
    ord.deliveryType = CST_DELIVERY_TYPE__SDEK_SELF.code;
    const ordCreated = await this.ordersService.orderCreate(ord, undefined);
    const ordId = stdIdGet(ordCreated);

    const prod = new ProductDto();
    prod.orderId = ordId;
    prod.url = 'https://www.coachoutlet.com/products/elle-hobo-in-signature-canvas/39527.html?dwvar_39527_color=IMAA8';
    prod.prodcatCode = lc.CST_PRODCAT__ACCESSORY.code;
    prod.prodsubcatCode = lc.CST_PRODSUBCAT__BAG.code;
    prod.name = 'Elle Hobo In Signature Canvas';
    prod.color = 'blue';
    prod.size = '32';
    prod.costDollar = 119;
    await this.productsService.productCreate(prod);

    const prod2 = new ProductDto();
    prod2.orderId = ordId;
    prod2.url = 'https://www.levi.com/RU/ru_RU/%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0/%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0%D0%BC/big-tall/501-levis-original-fit-jeans/p/005012920';
    prod2.prodcatCode = lc.CST_PRODCAT__MAN.code;
    prod2.prodsubcatCode = lc.CST_PRODSUBCAT__JEANS.code;
    prod2.name = '501® Levi’s® Original Fit Jeans';
    prod2.color = 'IRONWOOD - СИНИЙ';
    prod2.size = 'талия 31, длина 34';
    prod2.costDollar = 100.33;
    await this.productsService.productCreate(prod2);

    const prod3 = new ProductDto();
    prod3.orderId = ordId;
    prod3.url = 'https://www.levi.com/RU/ru_RU/shop-all/azalea-dress/p/219930000';
    prod3.prodcatCode = lc.CST_PRODCAT__WOMAN.code;
    prod3.prodsubcatCode = lc.CST_PRODSUBCAT__DRESS.code;
    prod3.name = 'Azalea Dress';
    prod3.color = 'TOFU - НЕОПРЕДЕЛЕННЫЙ';
    prod3.size = 'M';
    prod3.costDollar = 107.95;
    await this.productsService.productCreate(prod3);
  }

  private async order2Create() {
    const ord = new OrderCreateDto()
    ord.orderNumber = 309;
    ord.name = 'Заказ №' + ord.orderNumber;
    ord.date = new Date(2020, 8, 5);
    ord.status = lc.CST_ORDER_STATUS__PAYOK.code;
    const ordCreated = await this.ordersService.orderCreate(ord, undefined);
    const ordId = stdIdGet(ordCreated);

    const prod = new ProductDto();
    prod.orderId = ordId;
    prod.url = 'https://www.ralphlauren.com/boys-clothing-polo-shirts/big-pony-cotton-mesh-polo/401105.html?dwvar401105_colorname=White&cgid=boys-clothing-polo-shirts&webcat=Kids%20%20%20Baby%2FBoys%2FPolo%20Shirts#webcat=kids%257Cboys%257CPolo%2520Shirts&start=1&cgid=boys-clothing-polo-shirts';
    prod.prodcatCode = lc.CST_PRODCAT__CHILDREN.code;
    prod.prodsubcatCode = lc.CST_PRODSUBCAT__TSHIRT.code;
    prod.name = 'Big Pony Cotton Mesh Polo';
    prod.color = 'Carmel Pink';
    prod.size = '4T';
    prod.costDollar = 39.50;
    await this.productsService.productCreate(prod);
  }

  private async order3Create() {
    const ord = new OrderCreateDto()
    ord.orderNumber = 310;
    ord.name = 'Заказ №' + ord.orderNumber;
    ord.date = new Date(2020, 8, 15);
    ord.status = lc.CST_ORDER_STATUS__DELIV_AT_RUS.code;
    const ordCreated = await this.ordersService.orderCreate(ord, undefined);
    const ordId = stdIdGet(ordCreated);

    const prod = new ProductDto();
    prod.orderId = ordId
    prod.url = "https://www.gap.com/browse/product.do?pid=593819022&cid=13658&pcid=13658&vid=1&nav=meganav%3AWomen%3ACategories%3ADresses&grid=pds_0_344_1&cpos=0&cexp=1488&kcid=CategoryIDs%3D13658&cvar=11187&ctype=Listing&cpid=res2009300780544758159920#pdp-page-content"
    prod.name = "Utility Pocket Eyelet Dress"
    prod.prodcatCode = lc.CST_PRODCAT__WOMAN.code;
    prod.prodsubcatCode = lc.CST_PRODSUBCAT__DRESS.code;
    prod.size = "XL"
    prod.color = "olive green"
    prod.costDollar = 80
    await this.productsService.productCreate(prod);

    const prod1 = new ProductDto();
    prod1.orderId = ordId
    prod1.url = "https://www.gap.com/browse/product.do?pid=615594012&cid=1070923&pcid=1070923&vid=1&nav=meganav%3ABoys%3ACategories%3AT-Shirts&grid=pds_1_197_1&cpos=1&cexp=1488&kcid=CategoryIDs%3D1070923&cvar=11187&ctype=Listing&cpid=res20093008500583573943275#pdp-page-content"
    prod1.name = "Kids Graphic T-Shirt"
    prod1.prodcatCode = lc.CST_PRODCAT__CHILDREN.code;
    prod1.prodsubcatCode = lc.CST_PRODSUBCAT__TSHIRT.code;
    prod1.size = "XL (12)"
    prod1.color = "light heather gray"
    prod1.costDollar = 11
    await this.productsService.productCreate(prod1);
  }

  async tarifCategoriesGet() {
    return this.tarifModel
      .aggregate([
        {$group: {_id: "$prodcat", unique: {$addToSet: "$prodsubcat"}}},
        {$project: {_id: 0, prodcat: '$_id', prodsubcats: '$unique'}}
      ]);
  }

  // https://ratesapi.io/documentation/
  async currencyUSDGet(): Promise<ResultCurrencyUSD> {
    const obs = await this.httpService.get('https://api.ratesapi.io/api/latest?base=USD&symbols=RUB')
    const ret = new ResultCurrencyUSD();
    return obs.toPromise()
      .then(({data}) => {
        ret.date = data.date;
        ret.rubAtDollar = data.rates.RUB;
        return ret;
      })
      .catch(err => {
        throw new Error('ERR* [[201006161608]]: ' + err.message);
      })
  }

  async tarifElemGet(prodcatCode: string, prodsubcatCode: string) {
    return this.tarifModel.findOne({prodcat: prodcatCode, prodsubcat: prodsubcatCode})
  }

  async rubByUsdCalc(costUsd: number, prodcatCode: string, prodsubcatCode: string): Promise<CostTotalRub> {
    console.log('!!-!!-!! costUsd {201007094604}\n', costUsd) // del+
    console.log('!!-!!-!! prodcatCode {201007095529}\n', prodcatCode) // del+
    console.log('!!-!!-!! prodsubcatCode {201007095534}\n', prodsubcatCode) // del+

    const {rubAtDollar, date} = await this.currencyUSDGet();
    const tarifElem = await this.tarifElemGet(prodcatCode, prodsubcatCode);
    console.log('!!-!!-!! rubAtDollar {201007095547}\n', rubAtDollar) // del+
    console.log('!!-!!-!! tarifElem {201007095553}\n', tarifElem) // del+
    // стоимость доставки в Россию, руб
    const delivToRus = tarifElem[RZXX__COSTTORUS];
    // стоимость доставки по России, руб
    const delivInRus = tarifElem[RZXX__COSTINRUS];
    // наценка, руб
    const markup = tarifElem[RZXX__MARKUP];
    //
    const ret0 = (costUsd * rubAtDollar)
      + delivToRus
      + delivInRus
      + markup;
    const costRub = _.ceil(ret0, 2);
    // ---
    const ret = new CostTotalRub()
    ret.costRub = costRub;
    ret.info = new CostTotalRubInfo()
    ret.info.costDelivToRus = delivToRus;
    ret.info.costDelivInRus = delivInRus;
    ret.info.markup = markup;
    ret.info.usdCurrency = new UsdCurrency();
    ret.info.usdCurrency.date = date;
    ret.info.usdCurrency.rubAtDollar = rubAtDollar;
    return ret;
  }
}
