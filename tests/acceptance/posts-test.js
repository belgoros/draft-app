import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Listing posts', async function(assert) {
    server.createList('post', 2);
    await visit('/posts');

    assert.dom('[data-test-post=post-list-item]').exists({ count: 2 }, 'All posts are rendered');

  });
});
