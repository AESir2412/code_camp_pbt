import { BadRequestException, Body, Controller, Get, Post, Redirect, Render, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { Response } from 'express';

@Controller('/')
export class AppController {
  constructor(private userService: UserService) {}
  @Post()
  // @Redirect('/auth/google')
  async root(@Body() req, @Res({passthrough: true}) res: Response) {
    const user = await this.userService.findUserByEmail(req.email);
    if (!user) {
      throw new BadRequestException('Wrong info');
    }
    res.cookie('access_token', user._id.toString())
    return 'Logined';
  }
}
