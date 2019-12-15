const loadHelpers = require('./plop/scripts/helpers');
const loadEntity = require('./plop/scripts/entity');
const loadRepository = require('./plop/scripts/repository');
const loadUseCase = require('./plop/scripts/use-case');

module.exports = (plop) => {
  loadHelpers(plop);
  loadEntity(plop);
  loadRepository(plop);
  loadUseCase(plop);
};
