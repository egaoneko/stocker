import UserRecordMapper from '../../../../../src/data/db/mappers/account/UserRecordMapper';
import firebase from '../../../../../src/libs/firebase';
import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from '../../../../../__mocks__/constant';

describe('UserRecordMapper', () => {
  const mapper: UserRecordMapper = new UserRecordMapper();

  test('toEntity', () => {
    const raw: firebase.auth.UserRecord = new (jest.fn().mockImplementation(
        () => {
          return {
            toJSON: jest.fn().mockImplementation(() => {
              return {
                uid: DEFAULT_USER.id,
                email: DEFAULT_USER.email,
                displayName: DEFAULT_USER.name,
              }
            })
          };
        })
    ) as firebase.auth.UserRecord;
    const user: User = mapper.toEntity(raw);
    expect(user.id).toEqual(DEFAULT_USER.id);
    expect(user.email).toEqual(DEFAULT_USER.email);
    expect(user.name).toEqual(DEFAULT_USER.name);
  });
});
