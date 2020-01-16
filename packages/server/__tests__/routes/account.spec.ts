import * as supertest from 'supertest';
import Server from '../../src/Server';
import { DEFAULT_USER } from '../../__mocks__/account/constant';

const server: Server = new Server();
let request: supertest.SuperTest<supertest.Test>;
const PREFIX: string = '/accounts';

describe('Account Routes', () => {
  beforeAll(async () => {
    await server.listen(9000);
    request = supertest.agent(server.httpServer);
  });

  afterAll(() => server.close());

  test('create', async () => {
    await request
      .post(PREFIX + '/users')
      .send({
        id: DEFAULT_USER.id,
      })
      .expect(200)
      .expect((res: supertest.Response) => {
        expect(res.body.created).toBeFalsy();
      });
  });
});
