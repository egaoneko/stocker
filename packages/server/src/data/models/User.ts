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
  FindOrCreateOptions,
  Transaction
} from 'sequelize';

interface Properties {
  email: string;
  name: string;
  password?: string;
  role?: Role;
}

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

  public static createUser(
    {
      email,
      name,
      password,
      role
    }: Properties,
    transaction?: Transaction
  ): Promise<{ success: boolean, data: User }> {
    return User.findOrCreate({
      where: {
        email
      },
      defaults: {
        email,
        name,
        password,
        role,
      },
      transaction,
    })
      .then(([user, created]) => {
        if (created) {
          return {
            success: created,
            data: user,
          }
        } else {
          return {
            success: created,
            data: user,
          }
        }
      });
  }

  public toEntity(): UserEntity {
    return new UserEntity(this.id, this.email, this.name, this.role);
  }
}
