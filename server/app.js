import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();
app.disable('x-powered-by');

if (process.env.NODE_ENV === 'dev') {
  const devEnv = require('./dev-env');
  app.use(devEnv.middDev);
  app.use(devEnv.middHot);
}

app.use(express.static(path.join(__dirname, '../public')));
app.use('/', routes);

export default app;