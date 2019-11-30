import { async } from 'rxjs/internal/scheduler/async';
import mockAuthRepository, {
  mockDecodeToken,
} from '../../../../__mocks__/auth/AuthRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import DecodeToken from '../../../../src/domain/use-cases/auth/DecodeToken';

describe('DecodeToken UseCase', () => {
  beforeEach(() => {
    mockAuthRepository.mockClear();
    mockDecodeToken.mockClear();
  });

  test('DecodeToken is called', (done) => {
    const repository = new mockAuthRepository();
    const useCase: DecodeToken = new DecodeToken(repository);

    apply(useCase, (it: DecodeToken) => it.token = 'valid')
      .run(async, queue)
      .subscribe((decodedToken: {} | null) => {
        if (!decodedToken) {
          throw 'Token is invalid';
        }

        expect(mockDecodeToken).toHaveBeenCalledTimes(1);
        expect(decodedToken).toBeTruthy();
        done();
      });
  });

  test('DecodeToken is called with invalid token', (done) => {
    const repository = new mockAuthRepository();
    const useCase: DecodeToken = new DecodeToken(repository);

    apply(useCase, (it: DecodeToken) => it.token = 'invalid')
      .run(async, queue)
      .subscribe((decodedToken: {} | null) => {
        expect(mockDecodeToken).toHaveBeenCalledTimes(1);
        expect(decodedToken).toBeNull();
        done();
      });
  });

  test('throw exception without token', () => {
    const repository = new mockAuthRepository();
    const useCase: DecodeToken = new DecodeToken(repository);

    expect(() => {
      apply(useCase, () => {
      })
        .run(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});
