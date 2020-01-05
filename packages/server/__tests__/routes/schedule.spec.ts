import * as supertest from 'supertest';
import Server from '../../src/Server';
import { getIdToken } from '../__utils__/firebase';
import { DEFAULT_USER } from '../../__mocks__/account/constant';
import { ScheduleFunction } from '@stocker/core/lib/enums/schedule';

const server: Server = new Server();
let request: supertest.SuperTest<supertest.Test>;
const PREFIX: string = '/schedule';

describe('Schedule Routes', () => {
  beforeAll(async () => {
    await server.listen(8080);
    request = supertest.agent(server.httpServer);
  });

  afterAll(() => server.close());

  test('create without authorization', async () => {
    await request
      .post(PREFIX + '/')
      .expect(401)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('Unauthorized');
      });
  });

  test('create with authorization', async () => {
    const token: string = await getIdToken(DEFAULT_USER.id);
    await request
      .post(PREFIX + '/')
      .send({
        expression: '* * * * *',
        scheduleFunction: ScheduleFunction.CRAWL_STOCK_ITEM,
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(409)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('Already exists');
      });
  });
});
