declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // --- CORS
  app.enableCors();
  // ---
  await app.listen(3001);
  // --- HMR
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  // ---
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
