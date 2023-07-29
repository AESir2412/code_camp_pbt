import { Controller, Get, Post, Redirect, Render, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  @Get()
  @Redirect('/auth/google')
  root() {}
}
