import * as supertest from 'supertest';
import Server from '../../src/Server';
import { getIdToken } from '../__utils__/firebase';
import { DEFAULT_USER } from '../../__mocks__/account/constant';

const server: Server = new Server();
let request: supertest.SuperTest<supertest.Test>;
const PREFIX: string = '/stock-item';

describe('StockItem Routes', () => {
  beforeAll(async () => {
    await server.listen(8080);
    request = supertest.agent(server.httpServer);
  });

  afterAll(() => server.close());

  test('crawl without authorization', async () => {
    await request
      .get(PREFIX + '/crawl')
      .expect(401)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('Unauthorized');
      });
  });

  test('crawl with authorization', async () => {
    const token: string = await getIdToken(DEFAULT_USER.id);
    await request
      .get(PREFIX + '/crawl')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect((res: supertest.Response) => {
        console.log(res.body);
        expect(res.body).toHaveProperty('total');
        expect(res.body).toHaveProperty('success');
      });
  }, 5 * 60 * 1000);
});
