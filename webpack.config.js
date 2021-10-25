const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const MODE = process.env.NODE_ENV === 'development' ? 'development' : 'production'
const enabledSourceMap = MODE === 'development'

const config = {
  entry: './src/js/main.ts',
  output: {
    path: path.resolve(__dirname, 'js'),
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
        test: /\.ts$/,
        exclude: [/node_modules\/(?!(dom7|swiper)\/).*/],
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 1,
              sourceMap: enabledSourceMap,
            },
          },
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/style.css'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.css']
  },
  optimization: MODE === 'production' ? {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
  } : {},
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  }
}

module.exports = config
