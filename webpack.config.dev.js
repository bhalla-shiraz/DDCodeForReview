import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      actions: path.resolve(__dirname, 'src/redux/actions'),
      reduxConstants: path.resolve(__dirname, 'src/redux/constants'),
      reducers: path.resolve(__dirname, 'src/redux/reducers'),
      constants: path.resolve(__dirname, 'src/constants'),
      services: path.resolve(__dirname, 'src/services'),
    },
    extensions: ['', '.js', '.jsx']
   },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
     },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
