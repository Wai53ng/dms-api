import { BaseModel } from '../_base/models/base.model';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Country } from './country.model';

@Table({
  tableName: 'company',
})
export class Company extends BaseModel {
  @Column({
    type: DataType.STRING(6),
    unique: true,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  fullName: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  registrationNo: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  foundedDate: Date;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  website: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  contactNumber: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  fax: string;

  @ForeignKey(() => Country)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  countryId: number;

  @BelongsTo(() => Country)
  country: Country;
}
