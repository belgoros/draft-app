import DS from 'ember-data';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  title: validator('presence', {
    presence: true
  }),

  body: validator('presence', {
    presence: true
  }),

  tag_ids: validator('presence', {
    presence: true
  }),
});

export default DS.Model.extend(Validations, {
  title: DS.attr('string'),
  body: DS.attr('string'),
  archived: DS.attr('boolean'),
  tag_ids: DS.attr()
});
