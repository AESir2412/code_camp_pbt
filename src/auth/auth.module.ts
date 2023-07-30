import { Module } from '@nestjs/common';
import { GoogleStrategy } from './strategy/google.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { GoogleOAuthGuard } from './guard/google.guard';
import { APP_GUARD } from '@nestjs/core';
// {provide: APP_GUARD, useClass: GoogleOAuthGuard}
@Module({
    imports: [JwtModule, UserModule],
    providers: [GoogleStrategy, AuthService, ],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}