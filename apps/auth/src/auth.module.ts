import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SharedConfigModule } from '@app/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';
import { SecurityModule } from '@app/security';

@Module({
  imports: [
    SharedConfigModule,
    SecurityModule,
    TypeOrmModule.forRootAsync({
      imports: [SharedConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow<string>('AUTH_DB_HOST'),
        port: configService.getOrThrow<number>('AUTH_DB_PORT'),
        username: configService.getOrThrow<string>('AUTH_DB_USERNAME'),
        password: configService.getOrThrow<string>('AUTH_DB_PASSWORD'),
        database: configService.getOrThrow<string>('AUTH_DB_NAME'),
        autoLoadEntities: true,
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
  constructor(private readonly dataSource: DataSource) {}
}
