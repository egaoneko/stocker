import * as supertest from 'supertest';
import Server from '../../src/Server';
import { getIdToken } from '../__utils__/firebase';
import { DEFAULT_USER } from '../../__mocks__/account/constant';

const server: Server = new Server();
let request: supertest.SuperTest<supertest.Test>;
const PREFIX: string = '/stock-items';

describe('StockItem Routes', () => {
  beforeAll(async () => {
    await server.listen(9000);
    request = supertest.agent(server.httpServer);
  });

  afterAll(() => server.close());

  test('crawl without authorization', async () => {
    await request
      .get('/crawl' + PREFIX)
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
        expect(res.text).toEqual('OK');
      });
  });

  test('findAll without authorization', async () => {
    await request
      .get(PREFIX + '/')
      .expect(401)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('Unauthorized');
      });
  });

  test('findAll with authorization', async () => {
    const token: string = await getIdToken(DEFAULT_USER.id);
    await request
      .get(PREFIX + '/')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect((res: supertest.Response) => {
        expect(Array.isArray(res.body)).toBeTruthy();
      });
  });

  test('count without authorization', async () => {
    await request
      .get('/count' + PREFIX + '/')
      .expect(401)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('Unauthorized');
      });
  });

  test('count with authorization', async () => {
    const token: string = await getIdToken(DEFAULT_USER.id);
    await request
      .get('/count' + PREFIX + '/')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect((res: supertest.Response) => {
        expect(typeof res.body === 'number').toBeTruthy();
      });
  });
});
