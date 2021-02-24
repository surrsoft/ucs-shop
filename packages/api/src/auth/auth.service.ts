import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { logicPasswordsHashedCompare } from '../utils/logicUtils';

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
    const payload = {username: user._doc.email, sub: user._doc._id};
    return {
      // eslint-disable-next-line @typescript-eslint/camelcase
      access_token: this.jwtService.sign(payload),
    };
  }

}
