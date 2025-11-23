import { BaseModel } from '../_base/models/base.model';
import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { State } from './state.model';

@Table({
  tableName: 'city',
})
export class City extends BaseModel {
  @Column({
    type: DataType.STRING(6),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  postcode: string;

  @ForeignKey(() => State)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  stateId: number;

  @BelongsTo(() => State)
  state: State;
}
