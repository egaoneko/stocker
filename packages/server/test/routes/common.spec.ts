import Server from '../../src/Server';
import * as supertest from 'supertest';

const server: Server = new Server;

server.listen(3000);

const request: supertest.SuperTest<supertest.Test> = supertest.agent(server.httpServer);

describe('Common', () => {
  afterAll(() => server.close());

  test('ping', async () => {
    await request
      .get('/ping')
      .expect(200)
      .expect((res: supertest.Response) => {
        expect(res.text).toEqual('Success');
      });
  });
});
