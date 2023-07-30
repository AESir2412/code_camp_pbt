import { Module } from '@nestjs/common';
import { GpaService } from './gpa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GPASchema } from './gpa.model';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'GPA',
        schema: GPASchema
      }
    ]),
    UserModule
  ],
  providers: [GpaService],
  exports: [GpaService]
})
export class GpaModule {}
