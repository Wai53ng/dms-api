import { DataSource } from 'typeorm';
import { User } from './src/entity/user.entity';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'mysql',
  host: String(process.env.AUTH_DB_HOST),
  port: Number(process.env.AUTH_DB_PORT),
  username: String(process.env.AUTH_DB_USERNAME),
  password: String(process.env.AUTH_DB_PASSWORD),
  database: String(process.env.AUTH_DB_NAME),
  entities: [User],
  migrations: ['apps/auth/src/migration/*.ts'],
  synchronize: false,
});
