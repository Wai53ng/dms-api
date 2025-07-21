import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SharedConfigModule } from '@app/config';

@Module({
  imports: [AuthModule, SharedConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
