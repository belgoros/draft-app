import Controller from '@ember/controller';
import { computed } from '@ember/object';
import extractServerError from 'draft-app/utils/extract-server-error';

export default Controller.extend({
  baseErrors: computed('_baseErrors', {
    get() {
      return this._baseErrors || [];
    },
    set(key, value) {
      this.set('_baseErrors', value);
      return this._baseErrors;
    }
  }),

  actions: {
    async update() {
      let post = this.get('model');
      this.baseErrors.length = 0;

      let selectedTags = post.get('selectedTags');
      post.set('tag_ids', selectedTags.mapBy('id'));
      try {
        await post.save();
        this.transitionToRoute('posts');
      } catch(response) {
        let errorMessage = extractServerError(response.errors);
        this.baseErrors.pushObject(errorMessage);
      }
    }
  }
});
