import * as mongoose from 'mongoose'

export const ProductsSchema = new mongoose.Schema({
  name: String,
  prodcatCode: String,
  prodsubcatCode: String,
  size: String,
  color: String,
  url: String,
  costDollar: Number,
  costRub: Number,
  // [[201007103500]] - stringify class CostTotalRub ([201007103100])
  costRubInfo: String,
  orderId: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
}, {
  timestamps: true
})
