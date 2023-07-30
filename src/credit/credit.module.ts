import { Module } from '@nestjs/common';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';
import { UserModule } from 'src/user/user.module';
import { PostModule } from 'src/post/post.module';
import { GpaModule } from 'src/gpa/gpa.module';

@Module({
  imports: [UserModule, PostModule, GpaModule],
  controllers: [CreditController],
  providers: [CreditService]
})
export class CreditModule {}
