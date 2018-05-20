// Initializes the `temple` service on path `/temple`
const createService = require('feathers-mongoose');
const createModel = require('../../models/temple.model');
const hooks = require('./temple.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'temple',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/temple', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('temple');

  service.hooks(hooks);
};
