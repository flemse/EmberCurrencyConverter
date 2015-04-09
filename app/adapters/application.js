import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: config.APP.OpenExchangeRatesBaseUrl,
  namespace: 'api',

  pathForType: function(type) {
    return type + '?app_id=' + config.APP.OpenExchangeRatesAppId;
  }
});
