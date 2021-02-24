import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { COLL_PRODUCT } from '../consts';
import { Model } from "mongoose";
import { IProduct } from './interfaces/product.interface';
import { ProductDto, ProductUpdateDto } from './dto/product.dto';
import { OrdersService } from '../orders/orders.service';
import { TarifService } from '../tarif/tarif.service';
import { CostTotalRub } from '../dto/dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(COLL_PRODUCT) private readonly productsModel: Model<IProduct>,
    @Inject(forwardRef(() => OrdersService))
    private readonly ordersService: OrdersService,
    @Inject(forwardRef(() => TarifService))
    private readonly tarifsService: TarifService
  ) {

  }

  async productCreate(dto: ProductDto): Promise<IProduct> {
    const order = await this.ordersService.orderById(dto.orderId);
    if (!order) {
      throw new Error(`ERR*: orderId [${dto.orderId}] [[200929133342]]`);
    }
    // ---
    let costRub = 0;
    let costTotalRub: CostTotalRub = undefined;
    try {
      costTotalRub = await this.tarifsService.rubByUsdCalc(dto.costDollar, dto.prodcatCode, dto.prodsubcatCode);
      costRub = costTotalRub.costRub;
    } catch (err) {
      console.warn('ERR* err {201006181604}\n', err);
    }
    // ---
    const productModel = new this.productsModel({...dto, costRub, costRubInfo: JSON.stringify(costTotalRub)});
    return productModel.save();
  }

  async productUpdate(id: string, dto: ProductUpdateDto): Promise<IProduct> {
    return this.productsModel.findByIdAndUpdate(id, dto, {new: true});
  }

  async productsDeleteAll() {
    return this.productsModel.deleteMany({});
  }

  async productsDeleteByOrderId(orderId: string) {
    return this.productsModel.deleteMany({orderId});
  }

  async productDelete(productId: string) {
    return this.productsModel.findByIdAndDelete(productId);
  }
}
