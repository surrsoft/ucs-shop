import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path'
import { MongooseModule } from "@nestjs/mongoose";
import { CardsModule } from "./cards/cards.module";
import { CONF_MONGO_SUMMARY, CONF_ZEGO_FILE } from "./consts";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TarifModule } from './tarif/tarif.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    CardsModule,
    UsersModule,
    // GraphQL
    GraphQLModule.forRoot({
      // 'code first' way enable
      autoSchemaFile: join(process.cwd(), CONF_ZEGO_FILE),
      context: ({req}) => ({req})
    }),
    // MongoDB connect; by Mongoose
    MongooseModule.forRoot(CONF_MONGO_SUMMARY),
    AuthModule,
    TarifModule,
    OrdersModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
