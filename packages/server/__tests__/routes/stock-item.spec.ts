import * as supertest from 'supertest';
import Server from '../../src/Server';

const server: Server = new Server();
let request: supertest.SuperTest<supertest.Test>;
const PREFIX: string = '/stock-item';

describe('StockItem Routes', () => {
  beforeAll(async () => {
    await server.listen(8080);
    request = supertest.agent(server.httpServer);
  });

  afterAll(() => server.close());

  test('crawl', async () => {
    await request
      .get(PREFIX + '/crawl')
      .expect(200)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('ok');
      });
  });
});
