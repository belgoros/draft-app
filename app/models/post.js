import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  title: {
    description: 'Title',
    validators: [validator('presence', true)]
  },

  body: {
    description: 'Body',
    validators: [validator('presence', true)]
  },
  selectedTags: {
    description: 'Tags',
    validators: [validator('presence', true)]
  }
});

export default DS.Model.extend(Validations, {
  title: DS.attr('string'),
  body: DS.attr('string'),
  archived: DS.attr('boolean'),
  tag_ids: DS.attr(),
  photo: DS.attr('string')
});
