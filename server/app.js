import express from 'express';
import path from 'path';
import routes from './routes';
import { middDev, middHot } from './dev-env';

const app = express();
app.disable('x-powered-by');

if (process.env.NODE_ENV === 'dev') {
  app.use(middDev);
  app.use(middHot);
}

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

export default app;
