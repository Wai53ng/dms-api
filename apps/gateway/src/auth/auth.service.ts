import { LoginRequestDto } from '@app/dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private readonly authClient: ClientProxy) {}

  login(loginDto: LoginRequestDto) {
    return this.authClient.send('AUTH.LOGIN', loginDto);
  }

  logout() {
    return this.authClient.send('AUTH.LOGOUT', {});
  }
}
