import Profile from './Profile';
import {
  Table,
  DataType,
  Column,
  PrimaryKey,
  Default,
  Unique,
  Model,
} from 'sequelize-typescript';

@Table({
  tableName: 'user'
})
export default class User extends Model<User> {
  @PrimaryKey
  @Column(DataType.UUID)
  @Default(DataType.UUIDV1)
  public id!: string;

  @Column(DataType.STRING)
  @Unique
  public email!: string;

  public static associate(): void {
    User.hasOne(Profile, { foreignKey: 'fk_user_id', onDelete: 'CASCADE' });
  }

  public static findUser(
    type: 'email' | 'username',
    value: string
  ): Promise<User> {
    return User.findOne({ where: { [type]: value } });
  }

  public async getProfile(): Promise<Profile> {
    const { id } = this;
    return Profile.findByUserId(id);
  }
}
