import * as mongoose from 'mongoose'
import * as c from '../consts';

export const TarifsSchema = new mongoose.Schema({
  // категория, см. [200910130300]
  [c.RZXX__PRODCAT]: String,
  // подкатегория, см. [200910130401]
  [c.RZXX__PRODSUBCAT]: String,
  // стоимость доставки до России, руб.коп, например 100.25
  [c.RZXX__COSTTORUS]: Number,
  // стоимость доставки в России, руб.коп, например 100.25
  [c.RZXX__COSTINRUS]: Number,
  // наценка, руб.коп, например 100.25
  [c.RZXX__MARKUP]: Number,
  // вес, грамм, например 200
  [c.RZXX__WEIGHT]: Number,
  //
  [c.RZXX__COMMENT]: String
}, {
  timestamps: true
})
