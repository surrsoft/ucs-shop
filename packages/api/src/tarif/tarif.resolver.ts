import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { TarifService } from './tarif.service';
import { Result } from '../users/users.schema.gql';
import * as csvtojson from 'csvtojson';
import * as path from 'path';
import { Category, CurrencyGql } from './tarif.schema.gql';
import * as lc from '../utils/logicConsts';

@Resolver('Tarif')
export class TarifResolver {
  constructor(private tarifService: TarifService) {
  }

  @Query(() => [Category])
  async tarifCategoriesGet() {
    return this.tarifService.tarifCategoriesGet()
  }

  @Mutation(() => Result)
  async tarifDebugFill() {
    return this.tarifService.debugFill()
  }

  @Mutation(() => Result)
  async debug1() {
    // ---
    const json = await csvtojson()
      .fromFile(path.join(path.resolve(), 'src/tarif/tarifs.csv'))
    // ---
    return new Result();
  }

  @Query(() => String)
  async debugQuery() {
    return 'ok';
  }

  @Query(() => Number, {nullable: true})
  async debugQueryCurrency() {
    // const ret = await this.tarifService.rubByUsdCalc(
    //   100,
    //   lc.CST_PRODCAT__MAN.code,
    //   lc.CST_PRODSUBCAT__JEANS.code
    // );
    // console.log('!!-!!-!! ret {201006170318}\n', ret) // del+
    // return ret;
  }
}
