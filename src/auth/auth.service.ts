import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    login(req) {
        if (!req.user) {
            throw new BadRequestException();
        }

        console.log('Tse');
    }
}