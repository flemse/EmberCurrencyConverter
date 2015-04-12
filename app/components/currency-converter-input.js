import Ember from 'ember';

export default Ember.Component.extend({
  openDropdown: false,
  actions: {
    toggle: function() {
      this.toggleProperty('openDropdown');
    }
  }
});
