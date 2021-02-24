import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsSchema } from './cards.schema.mongoose';
import { CardsResolver } from "./cards.resolver";
import { COLL_CARD } from "../consts";

@Module({
  imports: [
    MongooseModule.forFeature([{name: COLL_CARD, schema: CardsSchema}])
  ],
  providers: [CardsResolver, CardsService]
})
export class CardsModule {
}
