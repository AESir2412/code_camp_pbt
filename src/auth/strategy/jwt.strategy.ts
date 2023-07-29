import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserModel } from "src/user/user.model";
import { config } from 'dotenv';
import { UserService } from "src/user/user.service";

export type JwtPayload = {
    sub: string;
    email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        private userService: UserService,
    ) {
        const extractJwtFromCookie = (req) => {
            let token = null;
            if (req && req.cookies) {
                token = req.cookies['access_token'];
            }
            return token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
        }

        super({
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_KEY,
            jwtFromRequest: extractJwtFromCookie
        })
    }

    async validate(payload: JwtPayload) {
        const user = await this.userService.findUserById(payload.sub);

        if (!user) throw new UnauthorizedException('Please log in to continue');

        return {
            id: payload.sub,
            email: payload.email
        };
    }
}