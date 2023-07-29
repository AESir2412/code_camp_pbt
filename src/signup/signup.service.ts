import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupModel } from './signup.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class SignupService {
  constructor(@InjectModel('Signup') private signupModel: Model<SignupModel>) {}

  async signup(user: User) {
    const newUser = new this.signupModel({
      username: user.username,
      email: user.email,
      password: await bcrypt.hash(user.password, 10),
    });
    try {
      await newUser.save();
    } catch (err) {
      if (err.message.includes('username')) {
        throw new HttpException('Username has been taken', 404);
      }
      if (err.message.includes('email')) {
        throw new HttpException('Email has been used', 404);
      }
      // Add failed new user exception later
    }
  }
}
