import {
  Table,
  DataType,
  Column,
  PrimaryKey,
  Default,
  Model,
} from 'sequelize-typescript';

@Table({
  tableName: 'user_profile'
})
export default class Profile extends Model<Profile> {
  @PrimaryKey
  @Column(DataType.UUID)
  @Default(DataType.UUIDV1)
  public id!: string;

  @Column(DataType.STRING)
  public displayName!: string;

  @Column(DataType.STRING)
  public shortBio!: string;

  @Column(DataType.STRING)
  public thumbnail!: string;

  public static associate(): void {}

  public static findByUserId(userId: string): Promise<Profile> {
    return Profile.findOne({
      where: {
        fk_user_id: userId
      }
    });
  }
}
