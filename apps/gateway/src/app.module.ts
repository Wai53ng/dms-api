import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SharedConfigModule } from '@app/config';
import { seconds, ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    SharedConfigModule,
    ThrottlerModule.forRootAsync({
      imports: [SharedConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          ttl: seconds(config.getOrThrow<number>('THROTTLE_TTL')),
          limit: config.getOrThrow<number>('THROTTLE_LIMIT'),
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
