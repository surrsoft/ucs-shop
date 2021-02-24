import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Cards {
  @Field(type => [Card])
  cards: [Card];
}

@ObjectType()
export class Card {
  @Field({nullable: true})
  title: string;

  @Field({nullable: true})
  comm: string;

  @Field({nullable: true})
  body: string;
}
