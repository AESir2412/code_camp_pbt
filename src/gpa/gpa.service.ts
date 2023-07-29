import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.model';
import { GPAModel } from './gpa.model';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

interface GPA{
    owner: User,
    score: Number
}

@Injectable()
export class GpaService {
    constructor(
        @InjectModel("GPA") private GPAModel: Model<GPAModel>
    ){}
}
