module.exports = (plop) => {
  plop.addHelper('ifEquals', function (str1, str2, options) {
    return str1 === str2 ? options.fn(this) : options.inverse(this);
  });
  plop.addHelper('ifNotEquals', function (str1, str2, options) {
    return str1 !== str2 ? options.fn(this) : options.inverse(this);
  });
};
