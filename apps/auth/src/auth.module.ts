import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SharedConfigModule } from '@app/config';

@Module({
  imports: [SharedConfigModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
