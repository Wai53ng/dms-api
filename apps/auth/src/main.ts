import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get(ConfigService);

  const port = configService.getOrThrow<number>('AUTH_PORT');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port,
    },
  });

  app.useLogger(new ConsoleLogger());

  await app.startAllMicroservices();
}
bootstrap();
