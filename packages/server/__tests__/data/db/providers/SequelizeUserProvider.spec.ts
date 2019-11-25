import '../../../config/sequelize';
import SequelizeUserProvider from '../../../../src/data/db/providers/SequelizeUserProvider';
import { rollback } from '../../../__utils__/db';
import { Transaction } from 'sequelize';
import UserEntity from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/constant/account';

describe('NaverStockProvider', () => {
  const provider: SequelizeUserProvider = new SequelizeUserProvider();

  test('createUser', async () => {
    await rollback(async (transaction: Transaction) => {
      const user: UserEntity = new UserEntity(null, 'test@test.com', 'test', Role.USER);
      user.password = '1234';

      const [result, created] = await provider.createUser(user, transaction).toPromise();

      expect(created).toBeTruthy();
    });
  });
});
