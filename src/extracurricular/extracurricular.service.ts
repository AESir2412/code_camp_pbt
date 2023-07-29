import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExtracurricularModel } from './extracurricular.model';

@Injectable()
export class ExtracurricularService {
  constructor(
    @InjectModel('GPA')
    private ExtracurricularModel: Model<ExtracurricularModel>,
  ) {}

  
}
