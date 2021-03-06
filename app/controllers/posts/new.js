import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async save() {
      let post = this.get('model');

      let selectedTags = post.get('selectedTags');
      post.set('tag_ids', selectedTags.mapBy('id'));

      await post.save();
      await this.transitionToRoute('posts');
    }
  }
});
