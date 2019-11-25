import { async } from 'rxjs/internal/scheduler/async';
import mockUserRepository, {
  mockCreateUser,
  reset
} from '../../../../__mocks__/account/UserRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import CreateUser from '../../../../src/domain/use-cases/account/CreateUser';
import User from '../../../../src/domain/entities/account/User';
import { Role } from '../../../../src/constant/account';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
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
    const user: User = new User(null, 'test@test.com', 'test', Role.USER);
    user.password = 'test';

    apply(useCase, (it: CreateUser) => it.user = user)
      .run(async, queue)
      .subscribe(([result, created]: [User, boolean]) => {
        expect(mockCreateUser).toHaveBeenCalledTimes(1);
        expect(created).toBeTruthy();
        expect(result.id).toBe("0");
        expect(result.email).toBe(user.email);
        expect(result.name).toBe(user.name);
        expect(result.role).toBe(user.role);
        expect(result.password).toBe(user.password);
        done();
      });
  });

  test('CreateUser is called same email', (done) => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User(null, 'test@test.com', 'test', Role.USER);
    user.password = 'test';

    apply(useCase, (it: CreateUser) => it.user = user)
      .run(async, queue)
      .pipe(
        switchMap<[User, boolean], Observable<[User, boolean]>>(([_, created]: [User, boolean]) => {
          expect(created).toBeTruthy();
          return apply(useCase, (it: CreateUser) => it.user = user)
            .run(async, queue)
        })
      )
      .subscribe(([result, created]: [User, boolean]) => {
        expect(mockCreateUser).toHaveBeenCalledTimes(2);
        expect(created).toBeFalsy();
        expect(result.id).toBe("0");
        expect(result.email).toBe(user.email);
        expect(result.name).toBe(user.name);
        expect(result.role).toBe(user.role);
        expect(result.password).toBe(user.password);
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

  test('throw exception without invalid email', () => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User(null, '', 'test', Role.USER);
    user.password = 'test';

    expect(() => {
      apply(useCase, (it: CreateUser) => it.user = user)
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception without invalid name', () => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User(null, 'test@test.com', '', Role.USER);
    user.password = 'test';

    expect(() => {
      apply(useCase, (it: CreateUser) => it.user = user)
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception without invalid role', () => {
    const repository = new mockUserRepository();
    const useCase: CreateUser = new CreateUser(repository);
    const user: User = new User(null, 'test@test.com', 'test', -1);
    user.password = 'test';

    expect(() => {
      apply(useCase, (it: CreateUser) => it.user = user)
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});
