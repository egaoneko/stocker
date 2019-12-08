import UserDataSnapshotMapper from '../../../../src/data/mappers/account/UserDataSnapshotMapper';
import admin from '../../../../src/libs/firebase-admin';
import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from '../../../../__mocks__/account/constant';

describe('UserDataSnapshotMapper', () => {
  const mapper: UserDataSnapshotMapper = new UserDataSnapshotMapper();

  test('toEntity', () => {
    const raw: admin.database.DataSnapshot = new (jest.fn().mockImplementation(
        () => {
          return {
            key: DEFAULT_USER.id,
            val: jest.fn().mockImplementation(() => {
              return {
                email: DEFAULT_USER.email,
                name: DEFAULT_USER.name,
                role: DEFAULT_USER.role,
                photo: DEFAULT_USER.photo,
                provider: DEFAULT_USER.provider,
              }
            })
          };
        })
    ) as admin.database.DataSnapshot;
    const user: User = mapper.toEntity(raw);
    expect(user.id).toEqual(DEFAULT_USER.id);
    expect(user.email).toEqual(DEFAULT_USER.email);
    expect(user.name).toEqual(DEFAULT_USER.name);
    expect(user.role).toEqual(DEFAULT_USER.role);
    expect(user.photo).toEqual(DEFAULT_USER.photo);
    expect(user.provider).toEqual(DEFAULT_USER.provider);
  });
});
