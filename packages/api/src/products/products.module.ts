import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { COLL_PRODUCT } from '../consts';
import { ProductsSchema } from './products.schema.mongoose';
import { OrdersModule } from '../orders/orders.module';
import { TarifModule } from '../tarif/tarif.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: COLL_PRODUCT, schema: ProductsSchema}]),
    forwardRef(() => OrdersModule),
    forwardRef(() => TarifModule)
  ],
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService]
})
export class ProductsModule {
}
