import { constant } from '@app/config';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;

  @Column()
  username: string;

  @Column({ default: constant.USER.STATUS.ACTIVE })
  status: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  loginAttempt: number;

  @Column()
  createdBy: string;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedBy: string;

  @Column({ nullable: true })
  updatedAt: Date;
}
