import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { logicPasswordsHashedCompare } from '../utils/logicUtils';
import { UserDto } from '../users/dto/user.dto';
import { RSUV_AL_ALREADY_EXIST, RsuvResultTibo } from 'rsuv-lib';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password) {
      if (await logicPasswordsHashedCompare(pass, user.password)) {
        // отбрасываем password
        const {password, ...result} = user;
        return result;
      }
    }
    return null;
  }

  // [[200907085500]]
  async login(user: any) {
    console.log(`!!-!!-!! 1510-10 -> :::::::::::::: login() {210702150915}:${Date.now()}`); // del+
    console.log('!!-!!-!! 1510-15 user {210702151411}\n', user); // del+
    const payload = {username: user._doc.email, sub: user._doc._id};
    console.log('!!-!!-!! 1510-20 payload {210702151005}\n', payload); // del+
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    };
  }

  /**
   * BUSLOG: Регистрация нового *пользователя. Ничего не делает если *пользователь с email (1) уже существует в *БД.
   * TECH:
   * Если в БД нет пользователя с email (1) - создаёт такого пользователя, возвращает {success: true}.
   * Если в БД уже есть пользователь с email (1) - возвращает {success: false, errCode: RSUV_AL_ALREADY_EXIST}.
   * В остальных случаях возвращает {success: false, errMessage: ..., errCode: ...}
   *
   * @param username (1) -- email
   * @param password (2) -- пароль
   * @return
   */
  async register(username: string, password: string): Promise<RsuvResultTibo> {
    console.log(`!!-!!-!! 1513-10 -> :::::::::::::: register() {210702151306}:${Date.now()}`); // del+
    console.log('!!-!!-!! 1513-20 username {210702162005}\n', username); // del+
    console.log('!!-!!-!! 1513-30 password {210702162015}\n', password); // del+
    // ---
    const email = username;
    const resTibo = new RsuvResultTibo()
    // ---
    let findRes;
    try {
      findRes = await this.usersService.findOne(email);
    } catch (err) {
      resTibo.success = false;
      resTibo.errCode = '210704091816'
      resTibo.errMessage = err.message;
      return resTibo; // RETURN
    }
    console.log('!!-!!-!! 1513-40 findRes {210702162558}\n', findRes); // del+
    // ---
    if (!findRes) {
      // --- userDto
      const userDto = new UserDto()
      userDto.email = email;
      userDto.password = password;
      // ---
      try {
        const res: any = await this.usersService.create(userDto);
        console.log('!!-!!-!! 1513-40 res {210702165728}\n', res); // del+
        if (res) {
          resTibo.value = {
            id: res._id,
            email: res.email,
            createdAt: res.createdAt,
            updatedAt: res.updatedAt
          }
        }
      } catch (err) {
        console.log('!!-!!-!! 1513-50 err {210702165635}\n', err); // del+
        resTibo.success = false;
        resTibo.errCode = '210704091818'
        resTibo.errMessage = err.message;
      }
    } else {
      resTibo.success = false;
      resTibo.errCode = '210704091817'
      resTibo.errCode = RSUV_AL_ALREADY_EXIST;
    }
    return resTibo;
  }
}
