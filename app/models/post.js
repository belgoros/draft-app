import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  archived: DS.attr('boolean'),
  tag_ids: DS.attr()
});
