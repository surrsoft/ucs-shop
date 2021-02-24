import { Field } from '@nestjs/graphql';

export class OrderDto {
  name: string
  orderNumber: number
  date: Date
  status: string
  deliveryType: string
  deliveryAddress: string
  productsCostSumRub: number
  costTotalRub: number
  duty: number
}

export class OrderCreateDto {
  name: string
  orderNumber: number
  date: Date
  status: string
  deliveryType: string
  deliveryAddress: string
}
