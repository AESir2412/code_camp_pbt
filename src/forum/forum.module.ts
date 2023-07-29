import { Module } from '@nestjs/common';
import { ForumService } from './forum.service';
import { ForumController } from './forum.controller';
import { PostModule } from 'src/post/post.module';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [
    PostModule,
    CommentModule
  ],
  providers: [ForumService],
  controllers: [ForumController]
})
export class ForumModule {}
