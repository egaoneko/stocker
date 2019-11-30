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
  // [withTM, {
  //   transpileModules: [],
  // }],
]);
