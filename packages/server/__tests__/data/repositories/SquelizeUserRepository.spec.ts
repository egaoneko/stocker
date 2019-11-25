import mockSequelizeUserProivider, { mockCreateUser } from '../../../__mocks__/account/SequelizeUserProivider';
import SquelizeUserRepository from '../../../src/data/repositories/SquelizeUserRepository';
import User from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/constant/account';

describe('SquelizeUserRepository', () => {
  const repository: SquelizeUserRepository = new SquelizeUserRepository((new mockSequelizeUserProivider()) as any);

  test('crawlStockItems', (done) => {
    const user: User = new User(null, 'test@test.com', 'test', Role.USER);
    user.password = '1234';

    repository.createUser(user)
      .subscribe(([result, created]: [User, boolean]) => {
        expect(mockCreateUser).toHaveBeenCalledTimes(1);
        expect(mockCreateUser).toBeCalledWith(user);
        expect(result.id).toEqual("0");
        expect(created).toEqual(true);
        done();
      });
  });
});
