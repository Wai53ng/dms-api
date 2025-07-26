import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { SecurityService } from '@app/security';
import { LoginResponseDto } from '@app/dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly dataSource: DataSource,
    private securityService: SecurityService,
  ) {}

  async login(username: string, password: string) {
    const response = new LoginResponseDto();

    try {
      const user = await this.userRepository.findOne({
        where: { username },
      });

      // check if user exist and compare password
      // check if status is not active or it reached maxLoginAttempted

      // write jwt
      // update lastLoginDate
    } catch (err: unknown) {
      console.error(err);
    }
    return response;
  }

  logout() {
    return null;
  }
}
