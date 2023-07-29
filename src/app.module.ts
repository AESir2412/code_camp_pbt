import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose"
import { SignupModule } from './signup/signup.module';
import { GpaModule } from './gpa/gpa.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'node:path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // process.env.MONGODB_URL
      "mongodb+srv://vulong2203:Vulong2003@users.cz5ftf6.mongodb.net/"
    ),
    SignupModule,
    GpaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
