import { Module } from '@nestjs/common';
import { GpaService } from './gpa.service';

@Module({
  providers: [GpaService]
})
export class GpaModule {}
