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
        if (!user) {
            throw new BadRequestException('Unauthenticated');
        }
        const userExists = await this.userService.findUserByEmail(user.mail)
        if (!userExists) {
            return this.registerUser({
                _id: new mongoose.Types.ObjectId(),
                username: user.name,
                lastOnline: new Date(),
                email: user.email,
                isAdmin: false,
                score: user.score,
            })
        }
        
        return userExists._id.toString();
    }
    
    async registerUser(user: UserDto) {
        try {
            // const newUser = await this.userService.createUser(user);
            // return newUser._id.toString();
            return '123';
        } catch {
            throw new InternalServerErrorException();   
        }
    }
}