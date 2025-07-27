import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { SecurityService } from '@app/security';
import { LoginResponseDto } from '@app/dto';
import { constant, responseMessage } from '@app/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly dataSource: DataSource,
    private securityService: SecurityService,
  ) {}

  async login(username: string, password: string) {
    const response = new LoginResponseDto();
    response.success = false;
    response.token = '';

    try {
      await this.dataSource.transaction(async (manager: EntityManager) => {
        const user: User | null = await this.userRepository.findOne({ where: { username } });

        if (!user) {
          response.message = responseMessage.WRONG_LOGIN_CREDENTIAL;
          return;
        }

        const { message, success } = this.verifyAuthUser(user, password);
        if (!success) {
          await this.updateLoginAttempt(manager, user);
          response.message = message;
          return;
        }

        await this.updateAuthUser(manager, user);

        const token: string = await this.securityService.signJwt({ id: user.id, username: user.username });
        response.success = true;
        response.token = token;
      });
    } catch (err: unknown) {
      console.error(err);
    }

    return response;
  }

  logout() {
    return null;
  }

  private verifyAuthUser(user: User, password: string) {
    if (user.loginAttempt >= constant.API.MAX_LOGIN_ATTEMPT) {
      return {
        message: responseMessage.MAX_LOGIN_ATTEMPT_REACHED,
        success: false,
      };
    }

    if (!this.securityService.comparePassword(password, user.password)) {
      return {
        message: responseMessage.WRONG_LOGIN_CREDENTIAL,
        success: false,
      };
    }

    if (user.status !== constant.USER.STATUS.ACTIVE) {
      return {
        message: responseMessage.LOGIN_USER_NOT_ACTIVE,
        success: false,
      };
    }

    return { message: '', success: true };
  }

  private async updateLoginAttempt(manager: EntityManager, user: User) {
    if (user.loginAttempt < constant.API.MAX_LOGIN_ATTEMPT) {
      user.loginAttempt += 1;
      user.updatedBy = user.username;

      await manager.save(user);
    }
  }

  private async updateAuthUser(manager: EntityManager, user: User) {
    user.lastLoginDate = new Date();
    if (user.loginAttempt > 0) user.loginAttempt = 0;
    user.updatedBy = user.username;

    await manager.save(user);
  }
}
