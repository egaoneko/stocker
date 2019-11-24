import * as supertest from 'supertest';
import Server from '../../src/Server';

const server: Server = new Server();
server.listen(3000);

const request: supertest.SuperTest<supertest.Test> = supertest.agent(server.httpServer);

describe('Common Route', () => {
  afterAll(() => server.close());

  test('ping', async () => {
    await request
      .get('/ping')
      .expect(200)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('success');
      });
  });
});