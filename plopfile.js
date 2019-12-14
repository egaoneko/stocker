const loadHelpers = require('./plop/scripts/helpers');
const loadEntity = require('./plop/scripts/entity');
const loadRepository = require('./plop/scripts/repository');

module.exports = (plop) => {
  loadHelpers(plop);
  loadEntity(plop);
  loadRepository(plop);
};
