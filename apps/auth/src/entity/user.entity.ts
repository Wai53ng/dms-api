import { constant } from '@app/config';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: bigint;

  @Column({ type: 'varchar', length: 15, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 1, default: constant.USER.STATUS.ACTIVE })
  status: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'smallint', default: 0 })
  loginAttempt: number;

  @Column({ type: 'date', nullable: true })
  lastLoginDate: Date;

  @Column({ type: 'varchar', length: 15 })
  createdBy: string;

  @Column({ type: 'datetime' })
  createdAt: Date;

  @Column({ type: 'varchar', nullable: true })
  updatedBy: string;

  @Column({ type: 'datetime', nullable: true })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 50 })
  version: string;

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  @BeforeUpdate()
  updateVersion() {
    this.version = v4().toString();
  }
}
