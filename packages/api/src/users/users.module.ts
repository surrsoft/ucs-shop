import { Module } from "@nestjs/common";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";
import { MongooseModule } from "@nestjs/mongoose";
import { COLL_USER } from "src/consts";
import { UsersSchema } from "./users.schema.mongoose";


@Module({
  imports: [
    MongooseModule.forFeature([{name: COLL_USER, schema: UsersSchema}])
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService]
})
export class UsersModule {

}
