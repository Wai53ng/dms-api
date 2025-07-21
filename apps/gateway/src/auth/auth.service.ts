import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  login(username: string, password: string) {
    return this.authClient.send('AUTH.LOGIN', {});
  }

  logout() {
    return this.authClient.send('AUTH.LOGOUT', {});
  }
}
