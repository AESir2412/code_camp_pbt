import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/user.model';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { UserDto } from 'src/user/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
        @InjectModel("User") private userModel: Model<User>
    ){}

    generateJwt(payload) {
        return this.jwtService.sign(payload);
    }

    async signIn(user) {
        if (!user) {
            throw new BadRequestException('Unauthenticated');
        }

        // Find if the user exists:
        const userExists = await this.userService.findUserByEmail(user.email);

        if (!userExists) {
            return this.registerUser(user);
        }

        return this.generateJwt({
            sub: userExists.id,
            email: userExists.email
        });
    }

    async registerUser(user: UserDto) {
        try {

            //Create new user in database:
            const newUser = await this.userService.createUser(user);

            return this.generateJwt({
                // sub: newUser.id,
                email: newUser.email
            });
            
        } catch {
            throw new InternalServerErrorException();
        }
    }
}

