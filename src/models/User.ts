import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
class User extends Model {
  @Column
    name!: number;

  @Column
    email!: string;

  @Column
    password!: string;
}

export default User;