import { ObjectType, Field, InputType } from "@nestjs/graphql";
import { GqlError, GqlErrors } from "src/util.schema.gql";

@ObjectType()
export class User {
  @Field({nullable: true})
  email: string;
  @Field({nullable: true})
  email2: string;
  @Field({nullable: true})
  nameFirst?: string;
  @Field({nullable: true})
  nameLast?: string;
  @Field({nullable: true})
  tel?: string;
  @Field({nullable: true})
  city?: string;
  @Field({nullable: true})
  password?: string
}

@ObjectType()
export class Users {
  @Field(type => [User])
  users: User[]
}

@InputType()
export class UserCreateInput {
  @Field()
  email: string;
  @Field({nullable: true})
  email2: string;
  @Field()
  nameFirst: string;
  @Field()
  nameLast?: string;
  @Field()
  tel: string;
  @Field({nullable: true})
  city?: string;
}

@ObjectType()
export class UserResult {
  @Field({nullable: true})
  user?: User
  @Field({nullable: true})
  errors?: GqlErrors
}

@ObjectType()
export class Result {
  @Field()
  isSuccess: boolean

  @Field(returns => [GqlError], {nullable: true})
  errors?: GqlError[]

  constructor(code = undefined, message = undefined) {
    this.isSuccess = true
    this.errors = []
    if (code || message) {
      this.errors.push(new GqlError(code, message))
      this.isSuccess = false
    }
  }

}
