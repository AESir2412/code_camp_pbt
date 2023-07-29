import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "src/user/user.dto";
import { User } from "src/user/user.model";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService
    ) {}

    generateJwt(payload) {
        return this.jwtService.sign(payload);
    }

    async signIn(user) {
        if (!user) {
            throw new BadRequestException('Unauthenticated');
        }

        const userExists = await this.userService.findUserByEmail(user.email);
        if (!userExists) {
            return this.registerUser(user)
        }

        return this.generateJwt({
            sub: userExists.id.toString(),
            email: userExists.email
        });
    }

    async registerUser(user: UserDto) {
        try {
            const newUser = await this.userService.createUser(user);
            console.log(newUser);
            return this.generateJwt({
                sub: newUser.id.toString(),
                email: newUser.email
            });
        } catch {
            throw new InternalServerErrorException();   
        }
    }
}