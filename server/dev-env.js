import webpack from 'webpack';
import webpackDevMidd from 'webpack-dev-middleware';
import webpackHotMidd from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const compiler = webpack(config);

export const middDev = webpackDevMidd(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath,
});

export const middHot = webpackHotMidd(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
});
