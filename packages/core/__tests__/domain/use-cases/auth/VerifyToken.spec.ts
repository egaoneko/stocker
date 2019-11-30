import { async } from 'rxjs/internal/scheduler/async';
import mockAuthRepository, {
  mockVerifyToken,
} from '../../../../__mocks__/auth/AuthRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import VerifyToken from '../../../../src/domain/use-cases/auth/VerifyToken';

describe('VerifyToken UseCase', () => {
  beforeEach(() => {
    mockAuthRepository.mockClear();
    mockVerifyToken.mockClear();
  });

  test('VerifyToken is called', (done) => {
    const repository = new mockAuthRepository();
    const useCase: VerifyToken = new VerifyToken(repository);

    apply(useCase, (it: VerifyToken) => it.token = 'valid')
      .run(async, queue)
      .subscribe((valid: boolean) => {
        expect(mockVerifyToken).toHaveBeenCalledTimes(1);
        expect(valid).toBeTruthy();
        done();
      });
  });

  test('VerifyToken is called with invalid token', (done) => {
    const repository = new mockAuthRepository();
    const useCase: VerifyToken = new VerifyToken(repository);

    apply(useCase, (it: VerifyToken) => it.token = 'invalid')
      .run(async, queue)
      .subscribe((valid: boolean) => {
        expect(mockVerifyToken).toHaveBeenCalledTimes(1);
        expect(valid).toBeFalsy();
        done();
      });
  });

  test('throw exception without token', () => {
    const repository = new mockAuthRepository();
    const useCase: VerifyToken = new VerifyToken(repository);

    expect(() => {
      apply(useCase, () => {
      })
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});
