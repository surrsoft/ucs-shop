import {
  RZXX__COMMENT,
  RZXX__COSTINRUS,
  RZXX__COSTTORUS,
  RZXX__MARKUP,
  RZXX__PRODCAT,
  RZXX__PRODSUBCAT,
  RZXX__WEIGHT
} from '../../consts';

export class TarifDto {
  [RZXX__PRODCAT]: string
  [RZXX__PRODSUBCAT]: string
  [RZXX__COSTTORUS]: number
  [RZXX__COSTINRUS]: number
  [RZXX__MARKUP]: number
  [RZXX__WEIGHT]: number
  [RZXX__COMMENT]: string

  constructor({
                prodcat = '',
                prodsubcat = '',
                costShipToRusRub = 0,
                costShipInRusRub = 0,
                markupRub = 0,
                weightGramm = 0,
                comment = ''
              }) {
    this[RZXX__PRODCAT] = prodcat;
    this[RZXX__PRODSUBCAT] = prodsubcat;
    this[RZXX__COSTTORUS] = costShipToRusRub;
    this[RZXX__COSTINRUS] = costShipInRusRub;
    this[RZXX__MARKUP] = markupRub;
    this[RZXX__WEIGHT] = weightGramm;
    this[RZXX__COMMENT] = comment;
  }
}

export class ResultCurrencyUSD {
  constructor(
    // example '2020-05-10'
    public date: string = '',
    public rubAtDollar: number = 0
  ) {
  }
}
