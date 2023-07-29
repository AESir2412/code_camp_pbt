import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { UserModule } from 'src/user/user.module';
import { PostModule } from 'src/post/post.module';
import { GpaModule } from 'src/gpa/gpa.module';
import { ForumModule } from 'src/forum/forum.module';
import { ExtracurricularModule } from 'src/extracurricular/extracurricular.module';
import { DocumentModule } from 'src/document/document.module';
import { CommentModule } from 'src/comment/comment.module';

@Module({
  imports: [UserModule, PostModule, GpaModule, ForumModule, ExtracurricularModule, DocumentModule, CommentModule],
  controllers: [TestController],
})
export class TestModule {}
