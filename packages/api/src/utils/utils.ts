import * as lodash from 'lodash';
import * as mongoose from 'mongoose';
import { CST_PRODCAT__ALL, CST_PRODSUBCAT__ALL, cstNameByCode } from './logicConsts';

const emailRegex = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
);

export function utilIsEmail(value) {
  emailRegex.lastIndex = 0
  return emailRegex.test(value);
}

// Version 1.0; ID 200909160200
export function utilStringNormalize(st) {
  if (st && st.length > 0) {
    return st.toLowerCase().trim()
  }
  return st;
}

/**
 * Convert number-as-string to number.
 * See test
 * Dependencies: lodash
 * Version 1 1.0; ID [xrsu] 200910182000
 * @param stNumber {string | number} -- example '3.2', '3,2', 3.2, 3
 * @return {number}
 */
export function stdStringToNumber(stNumber) {
  if (stNumber && (typeof stNumber === 'string')) {
    const stNumber0 = stNumber.replace(/,/, '.')
    return lodash.toNumber(stNumber0) || 0;
  }
  return 0;
}

export function stdIdGet(oj) {
  if (!oj) {
    throw new Error('ERR*: 200928102800');
  }
  return oj.id || oj._id
}

export function stdIdAsObjId(id) {
  if (typeof id === 'string') {
    return new mongoose.Types.ObjectId(id);
  }
  return id;
}

/**
 * Convert string field '_id' to ObjectId
 * @param oj
 */
export function stdMongoIdAdapt(oj) {
  let ret = oj;
  if (oj) {
    ret = {...oj}
    if (ret._id && (typeof ret._id === 'string')) {
      ret._id = stdIdAsObjId(ret._id);
    }
  }
  return ret;
}

export const blgProductAdapt = productBack => {
  productBack.id = productBack._id;
  productBack.prodcatName = cstNameByCode(CST_PRODCAT__ALL, productBack.prodcatCode);
  productBack.prodsubcatName = cstNameByCode(CST_PRODSUBCAT__ALL, productBack.prodsubcatCode);
}

export function blgProductsAdapt(productsBack) {
  if (productsBack && productsBack.length > 0) {
    productsBack.forEach(blgProductAdapt)
  }
}
