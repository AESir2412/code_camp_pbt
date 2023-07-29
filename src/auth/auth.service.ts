import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { UserDto } from "src/user/user.dto";
import { User } from "src/user/user.model";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService
    ) {}

    async signIn(user) {
        console.log(user);
        if (!user) {
            throw new BadRequestException('Unauthenticated');
        }
        const userExists = await this.userService.findUserByEmail(user.email);
        if (!userExists) {
            return this.registerUser({
                id: new mongoose.Types.ObjectId(),
                username: user.name,
                email: user.email
            })
        }
        
        return userExists.id.toString();
    }
    
    async registerUser(user: UserDto) {
        try {
            const newUser = await this.userService.createUser(user);
            if (!newUser) {
                console.log('1');
            }
            return newUser.id.toString();
        } catch {
            throw new InternalServerErrorException();   
        }
    }
}