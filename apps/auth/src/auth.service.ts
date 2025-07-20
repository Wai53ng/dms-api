import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { error: false, message: 'login' };
  }

  logout() {
    return null;
  }
}
