import { Module } from '@nestjs/common';
import { GpaService } from './gpa.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule
  ],
  providers: [GpaService],
})
export class GpaModule {}
