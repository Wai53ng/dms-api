import { Module } from '@nestjs/common';
import { SecurityService } from './security.service';
import { SharedConfigModule } from '@app/config';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    SharedConfigModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.getOrThrow<string>('JWT_EXPIRES'),
          algorithm: 'HS256',
        },
      }),
    }),
  ],
  providers: [SecurityService],
  exports: [SecurityService],
})
export class SecurityModule {}
