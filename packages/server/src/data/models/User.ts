import {
  Table,
  Model as DBModel,
  DataType,
  Column,
  PrimaryKey,
  Default,
  Unique,
  Validate,
} from 'sequelize-typescript';
import { Role } from '@stocker/core/lib/constant/account';
import { Model } from '@stocker/core/lib/data/models/Model';
import UserEntity from '@stocker/core/lib/domain/entities/account/User';
import {
  Transaction
} from 'sequelize';

@Table({
  tableName: 'user'
})
export default class User extends DBModel<User> implements Model {
  @PrimaryKey
  @Default(DataType.UUIDV1)
  @Column(DataType.UUID)
  public id!: string;

  @Unique
  @Validate({ isEmail: true })
  @Column(DataType.STRING)
  public email!: string;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.STRING)
  public password!: string;

  @Default(Role.USER)
  @Column(DataType.STRING)
  public role!: Role;

  public static createUser(user: UserEntity, transaction?: Transaction): Promise<[User, boolean]> {
    const { email, name, password, role }: UserEntity = user;
    return User.findOrCreate({
      where: {
        email: email
      },
      defaults: {
        email,
        name,
        password,
        role,
      },
      transaction,
    });
  }

  public toEntity(): UserEntity {
    const user: UserEntity = new UserEntity(this.id, this.email, this.name, this.role);

    user.password = this.password;

    return user;
  }
}
