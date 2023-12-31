import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.model';
import { GPAModel } from './gpa.model';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';

interface GPA {
  owner: User;
  score: Number;
}

@Injectable()
export class GpaService {
  constructor(
    @InjectModel('GPA') private gpaModel: Model<GPAModel>
  ) {}

  findGPAByOwnerId = async (ownerId: string) => {
    return await this.gpaModel.findOne({owner: new mongoose.Types.ObjectId(ownerId)})
  }

  findGPAByID = async (id: string) => {
    return await this.gpaModel.findOne({owner: new mongoose.Types.ObjectId(id)});
  }
}
