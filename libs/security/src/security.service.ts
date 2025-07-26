import { Injectable } from '@nestjs/common';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SecurityService {
  constructor(private jwtService: JwtService) {}

  hashPassword(password: string): string {
    const round: number = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
    return hashSync(password, genSaltSync(round));
  }

  comparePassword(password: string, hashPassword: string): boolean {
    return compareSync(password, hashPassword);
  }

  async signJwt(payload: object): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }
}
