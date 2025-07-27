import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { LoginRequestDto } from '@app/dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('AUTH.LOGIN')
  async login(data: LoginRequestDto) {
    const response = await this.authService.login(data.username, data.password);
    console.log(response)
    return response;
  }

  @MessagePattern('AUTH.LOGOUT')
  logout() {
    return this.authService.logout();
  }
}
