import Server from './Server';

const server: Server = new Server();
const port: any = process.env.PORT || 3000;

server.listen(port);