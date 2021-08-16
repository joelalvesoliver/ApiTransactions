
import 'dotenv/config';
import { setup } from './di-setup';
setup();
import Server from './server';

const server = new Server();
server.start();
