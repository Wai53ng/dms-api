import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      console.log('Database connected.');
    } catch (error) {
      console.error(error);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
