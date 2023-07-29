import { Injectable, Module } from '@nestjs/common';
import { GoogleStrategy } from './strategy/google.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    providers: [GoogleStrategy, AuthService],
    controllers: [AuthController]
})
export class AuthModule {}