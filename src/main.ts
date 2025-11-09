import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { getValidationPipe } from './config/validation-pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.getOrThrow<number>('PORT');
  const env = configService.getOrThrow<string>('ENV');

  app.useGlobalPipes(getValidationPipe(env));

  await app.listen(port);
}
bootstrap();
