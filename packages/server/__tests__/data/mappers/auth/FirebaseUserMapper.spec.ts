import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from '../../../../__mocks__/account/constant';
import FirebaseUserMapper from '../../../../src/data/mappers/auth/FirebaseUserMapper';

describe('FirebaseUserMapper', () => {
  const mapper: FirebaseUserMapper = new FirebaseUserMapper();

  test('toEntity', () => {
    const user: User = mapper.toEntity({
      uid: DEFAULT_USER.id,
      email: DEFAULT_USER.email,
      displayName: DEFAULT_USER.name,
      photoURL: DEFAULT_USER.photo,
    } as any);
    expect(user.id).toEqual(DEFAULT_USER.id);
    expect(user.email).toEqual(DEFAULT_USER.email);
    expect(user.name).toEqual(DEFAULT_USER.name);
    expect(user.photo).toEqual(DEFAULT_USER.photo);
  });
});
