import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.model';
import { GPAModel } from './gpa.model';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';

interface GPA {
  owner: User;
  score: number;
}

@Injectable()
export class GpaService {
  constructor(
    @InjectModel('GPA') private gpaModel: Model<GPAModel>,
    private userService: UserService
  ) {}

  findGPAByUsername = async (username: string) => {
    const promise = new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        const user = this.userService.findUserByUsername(username)
        resolve(user)
      }, 3000)
    }) 

    promise.then((user) => {
      return this.gpaModel.findOne({user: user})
    })
  }

  findGPAByEmail = async (email: string) => {
    const promise = new Promise<User>((resolve, reject) => {
      setTimeout(() => {
        const user = this.userService.findUserByEmail(email)
        resolve(user)
      }, 3000)
    }) 

    promise.then((user) => {
      return this.gpaModel.findOne({user: user})
    })
  }

  findGPAByID = async (id: string) => {
    return await this.gpaModel.findOne({owner: new mongoose.Types.ObjectId(id)});
  }
}
