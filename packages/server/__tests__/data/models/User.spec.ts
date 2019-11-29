import '../../__config__/sequelize';
import { Role } from '@stocker/core/lib/constant/account';
import UserEntity from '@stocker/core/lib/domain/entities/account/User';
import User from '../../../src/data/models/User';
import { rollback } from '../../__utils__/db';
import { Transaction } from 'sequelize';

describe('User Model', () => {

  test('toEntity', () => {
    const userModel: User = new User();
    userModel.id = '0';
    userModel.email = 'test@test.com';
    userModel.name = 'test';
    userModel.role = Role.ADMIN;
    userModel.password = '1234';

    const userEntity: UserEntity = userModel.toEntity();

    expect(userModel.id).toEqual(userEntity.id);
    expect(userModel.email).toEqual(userEntity.email);
    expect(userModel.name).toEqual(userEntity.name);
    expect(userModel.role).toEqual(userEntity.role);
    expect(userModel.password).toEqual(userEntity.password);
  });

  test('createUser', async () => {
    await rollback(async (transaction: Transaction) => {
      const user: UserEntity = new UserEntity(null, 'test@test.com', 'test', Role.USER);
      user.password = '1234';

      const [result, created] = await User.createUser(user, transaction);

      expect(created).toBeTruthy();
    });
  });
});

