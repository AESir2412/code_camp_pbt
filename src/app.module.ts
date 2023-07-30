import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GpaModule } from './gpa/gpa.module';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ExtracurricularModule } from './extracurricular/extracurricular.module';
import { DocumentModule } from './document/document.module';
import { ForumModule } from './forum/forum.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { TestModule } from './test/test.module';
import { CreditModule } from './credit/credit.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(
      // process.env.MONGODB_URL
      'mongodb+srv://vulong2203:Vulong2003@users.cz5ftf6.mongodb.net/',
    ),
    GpaModule,
    UserModule,
    AuthModule,
    ForumModule,
    PostModule,
    CommentModule,
    TestModule,
    ExtracurricularModule,
    DocumentModule,
    CreditModule,
  ],
  // controllers: [AppController, AuthController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
