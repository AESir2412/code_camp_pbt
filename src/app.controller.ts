import { BadRequestException, Body, Controller, Get, Post, Redirect, Render, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { Response } from 'express';

@Controller('/')
export class AppController {
  constructor(private userService: UserService) {}
  @Get()
  @Redirect('/auth/google')
  root() {}
}
