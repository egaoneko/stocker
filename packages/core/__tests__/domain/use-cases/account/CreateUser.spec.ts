import { async } from 'rxjs/internal/scheduler/async';
import mockUserRepository, {
  mockCreateUser,
  reset
} from '../../../../__mocks__/account/UserRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import CreateUser from '../../../../src/domain/use-cases/account/CreateUser';
import User from '../../../../src/domain/entities/account/User';
import { Role } from '../../../../src/constant/account';
import { apply } from '../../../../src/utils/common';

describe('CreateUser UseCase', () => {
  beforeEach(() => {
    mockUserRepository.mockClear();
    mockCreateUser.mockClear();
    reset();
  });

  test('CreateUser is called', (done) => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User('1234', 'test@test.com', 'test', Role.USER);

    apply(useCase, (it: CreateUser) => it.user = user)
      .run(async, queue)
      .subscribe((success: boolean) => {
        expect(mockCreateUser).toHaveBeenCalledTimes(1);
        expect(success).toBeTruthy();
        done();
      });
  });

  test('throw exception without user', () => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);

    expect(() => {
      apply(useCase, () => {})
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception without invalid id', () => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User('', 'test@test.com', 'test', Role.USER);

    expect(() => {
      apply(useCase, (it: CreateUser) => it.user = user)
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception without invalid email', () => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User('1234', '', 'test', Role.USER);

    expect(() => {
      apply(useCase, (it: CreateUser) => it.user = user)
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception without invalid name', () => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User('1234', 'test@test.com', '', Role.USER);

    expect(() => {
      apply(useCase, (it: CreateUser) => it.user = user)
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception without invalid role', () => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User('1234', 'test@test.com', 'test', -1);

    expect(() => {
      apply(useCase, (it: CreateUser) => it.user = user)
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});