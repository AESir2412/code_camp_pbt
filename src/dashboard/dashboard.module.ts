import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { UserModule } from 'src/user/user.module';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [
    UserModule,
    PostModule
  ],
  controllers: [DashboardController]
})
export class DashboardModule {}
