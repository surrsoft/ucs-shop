import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { COLL_ORDER } from '../consts';
import { Model } from "mongoose";
import { Order } from './interfaces/order.interface';
import { ProductDto } from '../products/dto/product.dto';
import { ProductsService } from '../products/products.service';
import { OrderCreateDto } from './dto/order.dto';
import {
  CST_DELIVERY_TYPE_ALL,
  CST_ORDER_STATUS__ALL,
  CST_ORDER_STATUS__FORMING,
  cstNameByCode
} from '../utils/logicConsts';
import * as dayjs from 'dayjs';
import { blgProductsAdapt, stdMongoIdAdapt } from '../utils/utils';
import * as _ from 'lodash';

function mtOrdersAdapt(orders: Order[]): Order[] {
  return orders.map(order => {
    order.id = order._id;
    order.statusName = cstNameByCode(CST_ORDER_STATUS__ALL, order.status);
    order.deliveryTypeName = cstNameByCode(CST_DELIVERY_TYPE_ALL, order.deliveryType);
    blgProductsAdapt(order.products);
    if (order.date) {
      order.dateString = dayjs(order.date).format('DD.MM.YYYY');
    }
    // --- cost
    order.productsCostSumRub = _.reduce(order.products, function (result, elProduct) {
      if (elProduct.costRub) {
        result += elProduct.costRub;
      }
      return result;
    }, 0)
    order.costTotalRub = order.productsCostSumRub;
    // ---
    return order;
  });
}

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(COLL_ORDER) private readonly orderModel: Model<Order>,
    @Inject(forwardRef(() => ProductsService))
    private readonly productsService: ProductsService
  ) {

  }

  async orderById(orderId: string) {
    const order = await this.orderModel.findById(orderId);
    return mtOrdersAdapt([order])[0];
  }

  async orderDelete(orderId: string) {
    await this.productsService.productsDeleteByOrderId(orderId);
    return this.orderModel.findByIdAndRemove(orderId);
  }

  async ordersGet(matchOj: any = {}) {
    const matchOj0 = stdMongoIdAdapt(matchOj);
    const aggrReq = [
      {$match: matchOj0},
      {
        $lookup: {
          from: 'products',
          localField: '_id',
          foreignField: 'orderId',
          as: 'products'
        }
      },
      {$sort: {date: -1}}
    ];
    const orders = await this.orderModel.aggregate(aggrReq).exec();
    return mtOrdersAdapt(orders);
  }

  async orderCreate(orderData: OrderCreateDto, productDto: ProductDto): Promise<Order> {
    let order = orderData;
    if (order) {
      order.date = order.date || new Date();
    } else {
      const num = Date.now();
      order = {
        orderNumber: num,
        date: new Date(),
        name: 'Заказ ' + num,
        status: CST_ORDER_STATUS__FORMING.code,
        deliveryType: undefined,
        deliveryAddress: undefined
      }
    }
    const orderN = await this.orderModel.create(order);
    // ---
    if (productDto) {
      const product = await this.productsService.productCreate({...productDto, orderId: orderN.id || orderN._id});
      orderN.products = [product];
    }
    return mtOrdersAdapt([orderN])[0]
  }

  async ordersDeleteAll() {
    return this.orderModel.deleteMany({});
  }

}
