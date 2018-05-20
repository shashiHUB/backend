const assert = require('assert');
const app = require('../../src/app');

describe('\'temple\' service', () => {
  it('registered the service', () => {
    const service = app.service('temple');

    assert.ok(service, 'Registered the service');
  });
});
