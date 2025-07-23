import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { LoginDto } from '@app/dto/auth/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('AUTH.LOGIN')
  async login(data: LoginDto) {
    console.log(data);
    return await this.authService.login();
  }

  @MessagePattern('AUTH.LOGOUT')
  logout() {
    return this.authService.logout();
  }
}
