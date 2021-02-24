import { Document } from 'mongoose'
import { IProduct } from '../../products/interfaces/product.interface';

export interface Order extends Document {
  name: string,
  orderNumber: number,
  date: Date,
  dateString: string,
  status: string,
  statusName: string,
  deliveryType: string,
  deliveryTypeName: string,
  deliveryAddress: string,
  productsCostSumRub: number,
  costTotalRub: number,
  duty: number,
  products: IProduct[]
}
