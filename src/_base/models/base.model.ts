import { BeforeCreate, BeforeUpdate, Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { randomUUID } from 'node:crypto';

@Table
export class BaseModel extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  declare createdBy: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  declare createdAt: Date;

  @Column({
    type: DataType.STRING(15),
    allowNull: true,
  })
  declare updatedBy: string;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  declare updatedAt: Date;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  declare version: string;

  @BeforeCreate
  static insertVersion(instance: BaseModel) {
    instance.version = randomUUID().toString();
  }

  @BeforeUpdate
  static updateVersion(instance: BaseModel) {
    instance.version = randomUUID().toString();
  }
}
