import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bodyParser = require("body-parser");
import * as cookieParser from 'cookie-parser';
var cors = require('cors')

declare const module: any;


async function bootstrap() {
  const app = await NestFactory.create(AppModule ,{cors:true});
  app.use(bodyParser.json());
  app.use(cookieParser());
  await app.listen(8000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
