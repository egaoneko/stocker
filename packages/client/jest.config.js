const jestConfig = require('../../jest.config');

jestConfig.testPathIgnorePatterns = [
  '<rootDir>/.next/',
  '<rootDir>/node_modules/'
];

module.exports = jestConfig;