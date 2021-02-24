/**
 * Информация о единицах участвовавших в расчете итоговой стоимости {CostTotalRub}
 */
export class CostTotalRubInfo {
  // стоимость доставки в Россию, руб
  costDelivToRus: number
  // стоимость доставки по России, руб
  costDelivInRus: number
  // наценка, руб
  markup: number
  //
  usdCurrency: UsdCurrency
}

/**
 * [[201007103100]]
 */
export class CostTotalRub {
  // расчитанная итоговая стоимость товара, руб
  public costRub: number
  public info: CostTotalRubInfo
}

export class UsdCurrency {
  // рублей за 1 доллар
  public rubAtDollar: number
  // дата курса, например '2020-05-31'
  public date: string
}
