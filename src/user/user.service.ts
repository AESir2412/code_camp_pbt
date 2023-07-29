import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel }  from './user.model'
import { Model } from "mongoose";
import * as bcrypt from "bcrypt"

interface User {
    username: string,
    email: string, 
    password: string,
}

@Injectable()
export class UserService {
    constructor(
        @InjectModel("User") private userModel: Model<UserModel>
    ){}
    
}
