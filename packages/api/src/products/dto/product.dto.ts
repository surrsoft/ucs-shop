import { ProductCreateInput } from '../products.schema.gql';

export class ProductDto {
  orderId: string
  name: string
  prodcatCode: string
  prodsubcatCode: string
  size: string
  color: string
  url: string
  costDollar: number

  static create(input: ProductCreateInput) {
    return {...input};
  }
}

export class ProductUpdateDto {
  name: string
  prodcatCode: string
  prodsubcatCode: string
  size: string
  color: string
  url: string
  costDollar: number
}
