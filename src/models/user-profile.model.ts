import { BaseModel } from '../_base/models/base.model';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Branch } from './branch.model';
import { Department } from './department.model';
import { Role } from './role.model';

@Table({
  tableName: 'user_profile',
})
export class UserProfile extends BaseModel {
  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Branch)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  branchId: number;

  @BelongsTo(() => Branch)
  branch: Branch;

  @ForeignKey(() => Department)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  departmentId: number;

  @BelongsTo(() => Department)
  department: Department;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  roleId: number;

  @BelongsTo(() => Role)
  role: Role;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
    },
  })
  fullName: string;

  @Column({
    type: DataType.STRING(1),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING(1),
    allowNull: false,
  })
  gender: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: true,
  })
  contactNumber: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  dateOfBirth: Date;
}
