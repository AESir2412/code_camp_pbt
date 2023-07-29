import { Module } from '@nestjs/common';
import { ExtracurricularService } from './extracurricular.service';

@Module({
  providers: [ExtracurricularService],
})
export class ExtracurricularModule {}
