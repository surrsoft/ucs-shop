import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { ProductGql } from '../products/products.schema.gql';


@ObjectType()
export class OrderGql {
  @Field({nullable: true})
  id: string
  @Field({nullable: true})
  name: string
  @Field({nullable: true})
  orderNumber: number
  @Field({nullable: true})
  date: Date
  @Field({nullable: true})
  dateString: string
  @Field({nullable: true})
  status: string
  @Field({nullable: true})
  statusName: string
  @Field({nullable: true})
  deliveryType: string
  @Field({nullable: true})
  deliveryTypeName: string
  @Field({nullable: true})
  deliveryAddress: string
  @Field({nullable: true})
  costTotalRub: number
  @Field({nullable: true})
  productsCostSumRub: number
  @Field(() => [ProductGql], {nullable: true})
  products: ProductGql[]
}

@InputType()
export class OrderCreateInput {
  @Field({nullable: true})
  name: string
  @Field({nullable: true})
  orderNumber: number
  @Field({nullable: true})
  date: Date
  @Field({nullable: true})
  status: string
  @Field({nullable: true})
  deliveryType: string
  @Field({nullable: true})
  deliveryAddress: string
}


