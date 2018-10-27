import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },
});
