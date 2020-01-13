// load environment variables from .env file
const dotenvFlow = require('dotenv-flow');

dotenvFlow.config();

const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

module.exports = withPlugins([
  withCss,
  [withLess, {
    lessLoaderOptions: {
      javascriptEnabled: true
    }
  }],
  withImages,
  [withTM, {
    transpileModules: ['@stocker/core'],
  }],
], {
  env: {
    TOKEN_NAME: process.env.TOKEN_NAME,
    PORT: process.env.PORT,
    API_SEVER: process.env.API_SEVER,
  },
});
