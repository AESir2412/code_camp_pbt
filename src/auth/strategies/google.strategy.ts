import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth2" ;
import { ConfigType } from "@nestjs/config"
import { InjectModel } from "@nestjs/mongoose";
import { UserModel } from "src/user/user.model";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    // @Inject(process.env.API_KEY) private configService: ConfigType<typeof config>
    // @InjectModel("User") UserModel;

}