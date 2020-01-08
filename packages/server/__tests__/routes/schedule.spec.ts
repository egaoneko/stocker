import * as supertest from 'supertest';
import Server from '../../src/Server';
import { getIdToken } from '../__utils__/firebase';
import { DEFAULT_USER } from '../../__mocks__/account/constant';
import { ScheduleFunction } from '@stocker/core/lib/enums/schedule';
import { DEFAULT_SCHEDULE } from '../../__mocks__/schedule/constant';

const server: Server = new Server();
let request: supertest.SuperTest<supertest.Test>;
const PREFIX: string = '/schedules';

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
        scheduleFunction: ScheduleFunction.TEST_SCHEDULE,
        priority: 0,
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(409)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('Already exists');
      });
  });

  test('update without authorization', async () => {
    await request
      .put(PREFIX + '/')
      .expect(401)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('Unauthorized');
      });
  });

  test('update without param', async () => {
    const token: string = await getIdToken(DEFAULT_USER.id);
    await request
      .put(PREFIX + '/')
      .send({})
      .set('Authorization', `Bearer ${token}`)
      .expect(500);
  });

  test('update with param', async () => {
    const token: string = await getIdToken(DEFAULT_USER.id);
    await request
      .put(PREFIX + '/')
      .send({
        expression: '*/10 * * * *',
        scheduleFunction: DEFAULT_SCHEDULE.scheduleFunction
      })
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('OK');
      });
  });
});
