import DS from 'ember-data';
import { pluralize } from 'ember-inflector';
import { underscore } from '@ember/string';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.apiHost,

  pathForType: function(type) {
    let underscored = underscore(type);
    return pluralize(underscored);
  },
});
