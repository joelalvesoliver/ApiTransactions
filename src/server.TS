import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import routes from './routes';

export default class Server {
  start(): void {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use('/backoffice', routes);

    createServer(app).listen(
      { port: process.env.SERVER_PORT || 3000 },
      (): void => {
        console.log(
          `Web server listening on port ${process.env.SERVER_PORT || 3000}`
        );
      }
    );
  }
}
