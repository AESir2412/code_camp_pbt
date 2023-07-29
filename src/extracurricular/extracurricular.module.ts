import { Module } from '@nestjs/common';
import { ExtracurricularService } from './extracurricular.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExtracurricularSchema } from './extracurricular.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Extracurricular',
        schema: ExtracurricularSchema
      }
    ])
  ],
  providers: [ExtracurricularService],
})
export class ExtracurricularModule {}
