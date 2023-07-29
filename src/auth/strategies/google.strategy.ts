import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth2" ;
import { ConfigModule, ConfigService, ConfigType } from "@nestjs/config"
import { User } from "src/user/user.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor (
        private configService: ConfigService,
        @InjectModel("User") private userModel: Model<User>
    ) {
        
        super({
            cliendID: configService.get<String>('CLIENT_ID'),
            clientSecret: configService.get<String>('CLIENT_SECRET'),
            callbackURL: configService.get<String>('CALLBACK_URL'),
            scope: ['profile', 'email']
        });
    }


}