import { Controller, Get, HttpStatus, Req, Res, UseGuards } from "@nestjs/common";
import { GoogleOAuthGuard } from "./guard/google.guard";
import { AuthService } from "./auth.service";
import { Response } from "express";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('google')
    @UseGuards(GoogleOAuthGuard)
    async auth() {}

    @Get('google/callback')
    @UseGuards(GoogleOAuthGuard)
    async Callback(@Req() req, @Res({passthrough: true}) res: Response) {
        const token = await this.authService.signIn(req.user);

        res.cookie('access_token', token, {
            maxAge: 300000,
            sameSite: true,
            secure: false
        });

        // return res.status(HttpStatus.OK);
        return 'Welcome to VIM';
    }
}
