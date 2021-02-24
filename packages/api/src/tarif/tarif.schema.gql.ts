import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  prodcat: string
  @Field(() => [String])
  prodsubcats: string[]
}

@ObjectType()
export class CurrencyGql {
  @Field()
  isSuccess: boolean
  @Field()
  errMessage: string
  @Field()
  rubAtDollar: number
  // example '2020-10-05'
  @Field()
  date: string
}
