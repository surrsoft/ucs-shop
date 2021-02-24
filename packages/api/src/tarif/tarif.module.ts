import { forwardRef, HttpModule, Module } from '@nestjs/common';
import { TarifService } from './tarif.service';
import { MongooseModule } from '@nestjs/mongoose';
import { COLL_TARIF } from '../consts';
import { TarifsSchema } from './tarif.schema.mongoose';
import { TarifResolver } from './tarif.resolver';
import { ProductsModule } from '../products/products.module';
import { OrdersModule } from '../orders/orders.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: COLL_TARIF, schema: TarifsSchema}]),
    forwardRef(() => ProductsModule),
    OrdersModule,
    HttpModule
  ],
  providers: [TarifResolver, TarifService],
  exports: [TarifService]
})
export class TarifModule {
}
