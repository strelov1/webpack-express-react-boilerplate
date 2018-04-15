import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000',
    path.resolve(__dirname, 'client/index.js'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
