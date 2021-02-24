import { Document } from 'mongoose'
import * as c from '../../consts';

export interface ITarif extends Document {
  [c.RZXX__PRODCAT]: string,
  [c.RZXX__PRODSUBCAT]: string,
  [c.RZXX__COSTTORUS]: number,
  [c.RZXX__COSTINRUS]: number,
  [c.RZXX__MARKUP]: number,
  [c.RZXX__WEIGHT]: number,
  [c.RZXX__COMMENT]: string,
}

