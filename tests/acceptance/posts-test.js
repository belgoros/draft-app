import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirageTest from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirageTest(hooks);

  test('Listing posts', async function(assert) {
    server.createList('post', 2);
    await visit('/posts');

    assert.dom('[data-test-post=post-list-item]').exists({ count: 2 }, 'All posts are rendered');

  });
});
