import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCreateInput, ProductGql, ProductUpdateInput } from './products.schema.gql';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { blgProductAdapt } from '../utils/utils';

@Resolver('Products')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {
  }

  @Mutation(() => ProductGql)
  async productCreate(@Args('orderId') orderId: string, @Args('product') product: ProductCreateInput) {
    const productDto = ProductDto.create(product);
    productDto.orderId = orderId;
    const productRet = await this.productsService.productCreate(productDto);
    blgProductAdapt(productRet);
    return productRet;
  }

  @Mutation(() => ProductGql)
  async productUpdate(@Args('productId') productId: string, @Args('product') product: ProductUpdateInput) {
    const productRet = await this.productsService.productUpdate(productId, product);
    blgProductAdapt(productRet);
    return productRet;
  }

  @Mutation(() => ProductGql)
  async productDelete(@Args('productId') productId: string) {
    const productRet = await this.productsService.productDelete(productId);
    blgProductAdapt(productRet);
    return productRet;
  }

}
