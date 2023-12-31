import { Controller, Get, HttpStatus, Req, Res, UseGuards } from "@nestjs/common";
import { GoogleOAuthGuard } from "./guard/google.guard";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { PassThrough } from "stream";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('google')
    @UseGuards(GoogleOAuthGuard)
    async auth() {}

    @Get('google/callback')
    @UseGuards(GoogleOAuthGuard)
    async Callback(@Req() req, @Res() res: Response) {
        const token = await this.authService.signIn(req.user);

        res.cookie('access_token', token, {
            maxAge: 300000,
            sameSite: true,
            secure: false
        });

    return res.redirect('http://localhost:3000/dashboard');
    }

    // @Get('google/react')
    
}