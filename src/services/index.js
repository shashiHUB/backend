const temple = require('./temple/temple.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(temple);
};
