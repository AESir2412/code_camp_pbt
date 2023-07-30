import { Module } from '@nestjs/common';
import { GpaService } from './gpa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GPASchema } from './gpa.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'GPA',
        schema: GPASchema
      }
    ])
  ],
  providers: [GpaService],
})
export class GpaModule {}
