import * as supertest from 'supertest';
import Server from '../../src/Server';


const server: Server = new Server();
let request: supertest.SuperTest<supertest.Test>;

describe('Ping Routes', () => {
  beforeAll(async () => {
    await server.listen(8080);
    request = supertest.agent(server.httpServer);
  });

  afterAll(() => server.close());

  test('ping', async () => {
    await request
      .get('/ping')
      .expect(200)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('OK');
      });
  });
});
