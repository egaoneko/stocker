import { async } from 'rxjs/internal/scheduler/async';
import mockAuthRepository, {
  mockFindUserByUid,
  reset
} from '../../../../__mocks__/auth/AuthRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import User from '../../../../src/domain/entities/account/User';
import { apply } from '../../../../src/utils/common';
import FindUserByUid from '../../../../src/domain/use-cases/auth/FindUserByUid';
import { DEFAULT_USER } from '../../../../__mocks__/account/constant';

describe('FindUserByUid UseCase', () => {
  beforeEach(() => {
    mockAuthRepository.mockClear();
    mockFindUserByUid.mockClear();
    reset();
  });

  test('FindUserByUid is called', (done) => {
    const repository = new mockAuthRepository();
    const useCase: FindUserByUid = new FindUserByUid(repository);

    apply(useCase, (it: FindUserByUid) => it.uid = DEFAULT_USER.id)
      .runOnce(async, queue)
      .subscribe((user: User | null) => {
        if (!user) {
          throw 'Can not find user';
        }

        expect(mockFindUserByUid).toHaveBeenCalledTimes(1);
        expect(user.id).toBe(DEFAULT_USER.id);
        done();
      });
  });

  test('FindUserByUid is called with unregistered user', (done) => {
    const repository = new mockAuthRepository();
    const useCase: FindUserByUid = new FindUserByUid(repository);

    apply(useCase, (it: FindUserByUid) => it.uid = '0')
      .runOnce(async, queue)
      .subscribe((user: User | null) => {
        expect(mockFindUserByUid).toHaveBeenCalledTimes(1);
        expect(user).toBeNull();
        done();
      });
  });

  test('throw exception without uid', () => {
    const repository = new mockAuthRepository();
    const useCase: FindUserByUid = new FindUserByUid(repository);

    expect(() => {
      apply(useCase, () => {
      })
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});
