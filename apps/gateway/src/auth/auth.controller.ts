import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from '@app/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() body: LoginRequestDto) {
    return this.authService.login(body);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout() {
    return this.authService.logout();
  }
}
