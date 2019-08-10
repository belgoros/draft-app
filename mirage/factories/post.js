import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
import { A } from '@ember/array';

export default Factory.extend({
  title: faker.lorem.sentence,
  body: faker.lorem.sentences,
  archived: true,
  tag_ids: A(1, 2, 3),
  photo: faker.random.uid
});
