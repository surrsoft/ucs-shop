import { forwardRef, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { COLL_ORDER } from '../consts';
import { OrdersSchema } from './orders.schema.mongoose';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: COLL_ORDER, schema: OrdersSchema}]),
    forwardRef(() => ProductsModule)
  ],
  providers: [OrdersService, OrdersResolver],
  exports: [OrdersService]
})
export class OrdersModule {
}
