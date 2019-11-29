import Server from './Server';

const server: Server = new Server();
const port: any = process.env.PORT || 8080;

server.listen(port);