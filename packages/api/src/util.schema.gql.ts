import { ObjectType, Field, CustomScalar, Scalar } from "@nestjs/graphql";

@ObjectType()
export class GqlError {
    @Field()
    code: string
    @Field()
    message: string

    constructor(code?: string, message?: string) {
        this.code = code
        this.message = message
    }
}

@ObjectType()
export class GqlErrors {
    @Field(type => [GqlError])
    errors: GqlError[]

    constructor(code?: string, message?: string) {
        this.errors = []
        // ---
        if (code || message) {
            this.errors.push(new GqlError(code, message))
        }
    }

    add(code: string, message: string) {
        const ge = new GqlError(code, message)
        this.errors.push(ge)
    }
}
