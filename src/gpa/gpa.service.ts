import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.model';
import { GPAModel } from './gpa.model';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from 'src/user/user.service';

@Injectable()
export class GpaService {
  constructor(
    @InjectModel('GPA') private gpaModel: Model<GPAModel>
  ) {}

  findGPAByOwnerId = async (ownerId: string) => {
    const gpa = this.gpaModel.findOne({owner: new mongoose.Types.ObjectId(ownerId)});
    return gpa;
  }

  
}
