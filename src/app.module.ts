import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';
import { GpaModule } from './gpa/gpa.module';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(
      // process.env.MONGODB_URL
      'mongodb+srv://vulong2203:Vulong2003@users.cz5ftf6.mongodb.net/',
    ),
    SignupModule,
    GpaModule,
    UserModule,
<<<<<<< HEAD
    LoginModule,
    AuthModule,
=======
    ExtracurricularModule,
    DocumentModule,
>>>>>>> e9bf9f5aefdb9c7604a4ef07de3a989da0ea0f88
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
