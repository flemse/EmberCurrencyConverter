import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType: function() {
    return this._super('latest.json');
  }
});
