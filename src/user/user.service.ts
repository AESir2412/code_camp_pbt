import { HttpException, Inject, Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './user.model';
import mongoose, { Model } from 'mongoose';
import { UserDto } from './user.dto'
import * as bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { REQUEST } from '@nestjs/core';
import bodyParser from 'body-parser';
import { endOfDay, startOfDay } from 'date-fns';

interface User {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  isAdmin: boolean
}

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserModel>) {}

    async createUser(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        return createdUser.save();
    }

  findUserByEmail = async (email: string) => {
    const user = await this.userModel.findOne({email: email})
    return user;
  };

  findUserByUsername = async (username: string) => {
    const user = await this.userModel.findOne({username: username});
    return user;
  };

  findUserById = async  (id: string) => {
    const user = await this.userModel.findOne(new mongoose.Types.ObjectId(id))
    return user;
  }

  updateLastOnline = async (email: string) => {
    let old = await this.userModel.findOne({email: email});
    old.lastOnline = new Date();
    return await old.save();
  }

  findAllToday = () => {
    return this.userModel.find({
      lastOnline: {
        $gte: startOfDay(new Date()),
        $lte: endOfDay(new Date())
      }
    })
  }

  findAllUser = () => {
    return this.userModel.find({})
  }

  updateScore = async (userID: string, score: number) => {
    let user = await this.userModel.findOne({_id: new mongoose.Types.ObjectId(userID)});
    user.score = score;
    return await user.save();
  }
}


