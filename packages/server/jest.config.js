const jestConfig = require( '../../jest.config');

jestConfig.coveragePathIgnorePatterns.push("/src/server.ts");

module.exports = jestConfig;