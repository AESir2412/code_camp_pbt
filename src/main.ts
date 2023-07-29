import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import bodyParser = require("body-parser")

declare const module: any;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json());
  await app.listen(8000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
