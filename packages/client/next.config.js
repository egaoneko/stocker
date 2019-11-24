const images = require('next-images');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

module.exports = withPlugins([
  images,
  // [withTM, {
  //   transpileModules: [],
  // }],
]);
