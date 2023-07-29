import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-jwt;'
import { User } from "src/user/user.model";
import { UserService } from "src/user/user.service";

export type JwtPayload = {
    sub: string;
    email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        private configService: ConfigService,
        @InjectModel(User) private userService: UserService
    ) {
        super({
            ignoreExpiration: false,
            secretOrKey: configService.get()
        })
    }
}