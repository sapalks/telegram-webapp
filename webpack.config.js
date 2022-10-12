const isProd = process.env.PROD_MODE === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist/`,
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      use: 'ts-loader',
    },
    {
      test: /\.less$/i,
      use: [
        // compiles Less to CSS
        'style-loader',
        'css-loader',
        'less-loader',
      ],
    },
    { test: /\.file.svg$/, use: ['file-loader'] }, // это если svg надо использовать как файл
    {
      test: /\.svg$/, // а это если как компоненту
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true,
          },
        },
      ],
    },
    ],
  },
  devtool: isProd ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: './src/assets/favicon.ico',
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      api: path.resolve(__dirname, './src/api'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      store: path.resolve(__dirname, './src/store'),
      utils: path.resolve(__dirname, './src/utils'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    allowedHosts: 'all',
  },
};
