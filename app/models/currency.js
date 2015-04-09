import DS from 'ember-data';

export default DS.Model.extend({
  base: DS.attr('string'),
  rates: DS.hasMany('rate')
});
