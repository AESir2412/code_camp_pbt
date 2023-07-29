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

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(
      // process.env.MONGODB_URL
      'mongodb+srv://vulong2203:Vulong2003@users.cz5ftf6.mongodb.net/',
    ),
    // GpaModule,
    UserModule,
    AuthModule,
    // ExtracurricularModule,
    // DocumentModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
