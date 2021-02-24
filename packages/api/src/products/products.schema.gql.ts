import { Field, InputType, ObjectType } from '@nestjs/graphql';

// [[200925154400]]
@InputType()
export class ProductCreateInput {
  @Field({nullable: true})
  orderId: string
  @Field({nullable: false})
  url: string
  @Field({nullable: false})
  name: string
  @Field({nullable: false})
  prodcatCode: string
  @Field({nullable: false})
  prodsubcatCode: string
  @Field({nullable: true})
  size: string
  @Field({nullable: true})
  color: string
  @Field({nullable: false})
  costDollar: number
}

@InputType()
export class ProductUpdateInput {
  @Field({nullable: false})
  url: string
  @Field({nullable: false})
  name: string
  @Field({nullable: false})
  prodcatCode: string
  @Field({nullable: false})
  prodsubcatCode: string
  @Field({nullable: true})
  size: string
  @Field({nullable: true})
  color: string
  @Field({nullable: false})
  costDollar: number
}


@ObjectType()
export class ProductGql {
  @Field()
  id: string
  @Field({nullable: true})
  name: string
  @Field({nullable: true})
  url: string
  @Field({nullable: true})
  prodcatCode: string
  @Field({nullable: true})
  prodcatName: string
  @Field({nullable: true})
  prodsubcatCode: string
  @Field({nullable: true})
  prodsubcatName: string
  @Field({nullable: true})
  size: string
  @Field({nullable: true})
  color: string
  @Field({nullable: true})
  costDollar: number
  @Field({nullable: true})
  costRub: number
}
