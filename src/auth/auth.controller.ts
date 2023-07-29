import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { GoogleOAuthGuard } from "./guard/google.guard";


@Controller('auth')
export class AuthController {
    
    @Get()
    @UseGuards(GoogleOAuthGuard)
    async googleAuth(@Req() req) {}

    @Get('redirect')
    @UseGuards(GoogleOAuthGuard)
    googleAuthRedirect(@Req() req) {
        return this
    }
}
