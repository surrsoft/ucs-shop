import * as mongoose from 'mongoose'

export const OrdersSchema = new mongoose.Schema({
  name: String,
  orderNumber: Number,
  date: Date,
  // code, see [200925161700]
  status: String,
  // code, see [200929105600]
  deliveryType: String,
  deliveryAddress: String,
  productsCostSumRub: Number,
  costTotalRub: Number,
  duty: Number,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, {
  timestamps: true
})
