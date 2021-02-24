import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { OrderCreateInput, OrderGql } from './orders.schema.gql';
import { ProductDto } from '../products/dto/product.dto';
import { ProductCreateInput } from '../products/products.schema.gql';

@Resolver('Orders')
export class OrdersResolver {
  constructor(private orderService: OrdersService) {
  }

  @Query(() => OrderGql, {nullable: true})
  async orderByIdGetResolver(@Args('orderId') orderId: string) {
    const arr = await this.orderService.ordersGet({_id: orderId});
    return arr && arr.length === 1 ? arr[0] : undefined;
  }

  @Query(() => [OrderGql])
  async ordersGet() {
    return this.orderService.ordersGet()
  }

  @Mutation(() => OrderGql)
  async orderCreate(
    @Args('orderData', {nullable: true}) orderData: OrderCreateInput,
    @Args('input', {nullable: true}) input: ProductCreateInput
  ) {
    const product = input ? ProductDto.create(input) : undefined;
    return this.orderService.orderCreate(orderData, product);
  }

  @Mutation(() => OrderGql)
  async orderDelete(@Args('orderId') orderId: string) {
    throw new Error('ERR* [[201006122215]]');
    return this.orderService.orderDelete(orderId);
  }
}
