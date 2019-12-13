const loadHelpers = require('./plop/scripts/helpers');
const loadEntity = require('./plop/scripts/entity');

module.exports = (plop) => {
  loadHelpers(plop);
  loadEntity(plop);
};
