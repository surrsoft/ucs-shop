import { UsersService } from "./users.service";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Result, User, UserCreateInput, UserResult, Users } from "./users.schema.gql";
import { UserDto } from "./dto/user.dto";
import { GqlErrors } from "src/util.schema.gql";
import {
  ERR_CODE_DUP_KEY_EMAIL,
  ERR_CODE_INVALID_USER_EMAIL, VIKW__EMAIL_INVALID, VIKW__USER_NOT_FOUND
} from "src/consts";
import { utilIsEmail, utilStringNormalize } from '../utils/utils';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-jwt-auth.guard';
import { CurrentUser } from '../utils/currentUser';
import {
  logicPasswordEmailSend,
  logicPasswordHashedGenerate
} from '../utils/logicUtils';


@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {
  }

  @Query(() => Users, {name: 'users'})
  @UseGuards(GqlAuthGuard)
  async usersAllGet(@CurrentUser() user: User) {
    const all = await this.usersService.findAll()
    return {
      users: all
    }
  }

  @Query(() => User, {name: 'user'})
  async userGet(@Args('email') email: string) {
    const user = await this.usersService.findOne(email);
    if (user) {
      user.password = '';
    }
    return user || {};
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    // see [200907085500]
    return this.usersService.findOne(user['username'])
  }

  /**
   *
   * @param email
   * @return err code is [vikw] or [enbd]
   */
  @Mutation(() => Result, {name: 'userPasswordRestore'})
  async userPasswordRestore(@Args('email') email: string) {
    const email0 = utilStringNormalize(email);
    // --- email verify
    if (!utilIsEmail(email0)) {
      return new Result(VIKW__EMAIL_INVALID, 'Invalid user email')
    }
    // --- user verify
    const user = await this.usersService.findOne(email0)
    if (!user) {
      return new Result(VIKW__USER_NOT_FOUND, 'User not found')
    }
    // ---
    const poj = await logicPasswordHashedGenerate();
    const sendResult = await logicPasswordEmailSend(email0, poj.password);
    if (!sendResult.isSuccess) {
      return sendResult;
    }
    await this.usersService.update(user.id || user._id, {password: poj.passwordHashed})
    return sendResult;
  }

  @Mutation(() => UserResult)
  async userCreate(@Args('input') input: UserCreateInput) {
    const ret = new UserResult
    const inputEmail = utilStringNormalize(input.email)
    // --- verify
    const b = utilIsEmail(inputEmail)
    if (!b) {
      ret.errors = new GqlErrors(ERR_CODE_INVALID_USER_EMAIL, 'Invalid user email')
      return ret
    }
    // ---
    const dto = new UserDto()
    dto.email = inputEmail
    dto.nameFirst = input.nameFirst
    dto.nameLast = input.nameLast
    dto.tel = input.tel
    dto.city = input.city
    const poj = await logicPasswordHashedGenerate()
    dto.password = poj.passwordHashed;
    // --- create
    try {
      ret.user = await this.usersService.create(dto)
    } catch (error) {
      ret.errors = new GqlErrors(
        error.errmsg.includes('email_1 dup key') ? ERR_CODE_DUP_KEY_EMAIL : '0',
        error.message
      )
    }
    // --- sending email with password
    // if user success created
    if (ret.user) {
      await logicPasswordEmailSend(inputEmail, poj.password);
    }
    // ---
    return ret
  }
}
