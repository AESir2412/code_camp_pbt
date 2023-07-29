import { HttpException, Inject, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './user.model';
import { Model } from 'mongoose';
import { UserDto } from './user.dto'
import * as bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { REQUEST } from '@nestjs/core';
import bodyParser from 'body-parser'

interface User {
  username: String;
  email: String;
}

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserModel>) {}

    async createUser(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
    }

  findUserByEmail = async (email: String) => {
    const user = await this.userModel.findOne({email: email})
    return user;
  };

  findUserByUsername = async (username: String) => {
    const user = await this.userModel.findOne({username: username});
    return user;
  }
}


