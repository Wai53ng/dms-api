import { BaseModel } from '../_base/models/base.model';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Company } from './company.model';
import { constant } from '../config/constant';

@Table({
  tableName: 'branch',
})
export class Branch extends BaseModel {
  @Column({
    type: DataType.STRING(6),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Company)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  companyId: number;

  @BelongsTo(() => Company)
  company: Company;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  headquarter: boolean;

  @Column({
    type: DataType.STRING(1),
    defaultValue: constant.BRANCH.STATUS.ACTIVE,
  })
  status: string;
}
