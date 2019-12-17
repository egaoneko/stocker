const loadHelpers = require('./plop/scripts/helpers');
const loadPrompts = require('./plop/scripts/prompts');
const loadEntity = require('./plop/scripts/entity');
const loadRepository = require('./plop/scripts/repository');
const loadUseCase = require('./plop/scripts/use-case');
const loadLintUseCase = require('./plop/scripts/link-use-case');

module.exports = (plop) => {
  loadHelpers(plop);
  loadPrompts(plop);
  loadEntity(plop);
  loadRepository(plop);
  loadUseCase(plop);
  loadLintUseCase(plop);
};
