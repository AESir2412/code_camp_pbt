import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';
import { GpaModule } from './gpa/gpa.module';
import { UserModule } from './user/user.module';
import { ExtracurricularModule } from './extracurricular/extracurricular.module';
import { DocumentModule } from './document/document.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      // process.env.MONGODB_URL
      'mongodb+srv://vulong2203:Vulong2003@users.cz5ftf6.mongodb.net/',
    ),
    SignupModule,
    GpaModule,
    UserModule,
    ExtracurricularModule,
    DocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
