import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(`!!-!!-!! 1519-10 -> :::::::::::::: login() {210702151920}:${Date.now()}`); // del+
    // return { access_token: ... }
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async register(@Request() req) {
    console.log(`!!-!!-!! 1523-10 -> :::::::::::::: register() {210702152259}:${Date.now()}`); // del+
    console.log('!!-!!-!! 1523-20 req.username {210702161916}\n', req.username); // del+
    console.log('!!-!!-!! 1523-30 req.password {210702161925}\n', req.password); // del+
    console.log('!!-!!-!! 1523-40 req.body {210702162057}\n', req.body); // del+
    return this.authService.register(req.body?.username, req.body?.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
