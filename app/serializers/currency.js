import DS from 'ember-data';
/* global _:true */

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    rates: { embedded: 'always' }
  },
  extract: function(store, type, payload, id, requestType) {
    var data = {
      currency: [{
        id: 1,
        base: payload.base
      }]
    };
    var _id = 1;
    data.currency[0].rates = _.map(payload.rates, function(rate, code) {
      return {
        id: _id++,
        code: code,
        rate: rate
      };
    });

    return this._super(store, type, data, id, requestType);
  }
});
