const merge = require('webpack-merge');
const shared = require('./webpack.config');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = merge(shared, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    // Less messages in the browser console
    clientLogLevel: 'warning',
    contentBase: './public',
    historyApiFallback: {
      disableDotRule: true
    },
    host: '0.0.0.0',
    hot: true,
    // Hide Webpack output (except for errors/warnings)
    noInfo: false,
    port: 3000,
    useLocalIp: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9' // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009'
                })
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
