import { BaseModel } from '../_base/models/base.model';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { Branch } from './branch.model';
import { City } from './city.model';
import { State } from './state.model';
import { Country } from './country.model';

@Table({
  tableName: 'address',
})
export class Address extends BaseModel {
  @ForeignKey(() => Branch)
  @Column({
    type: DataType.BIGINT,
    allowNull: true,
  })
  branchId: number;

  @BelongsTo(() => Branch)
  branch: Branch;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  line1: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  line2: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  line3: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  postcode: string;

  @ForeignKey(() => City)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  cityId: number;

  @BelongsTo(() => City)
  city: City;

  @ForeignKey(() => State)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  stateId: number;

  @BelongsTo(() => State)
  state: State;

  @ForeignKey(() => Country)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  countryId: number;

  @BelongsTo(() => Country)
  country: Country;
}
