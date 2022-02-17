const path = require('path')
const { ESBuildMinifyPlugin } = require('esbuild-loader')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const MODE = process.env.NODE_ENV === 'development' ? 'development' : 'production'
const enabledSourceMap = MODE === 'development'

const config = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  devtool: enabledSourceMap ? 'inline-source-map' : false,
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true
            }
          },
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.css']
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin()
    ]
  }
}

module.exports = config
