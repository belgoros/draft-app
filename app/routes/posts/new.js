import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('post')
  },

  actions: {
    async save() {
      var route = this;
      let controller = this.get('controller');

      let post = route.modelFor(route.routeName);
      let selectedTags = controller.get('selectedTags');
      console.log('selectedTags: '  + selectedTags);
      post.set('tag_ids', selectedTags.mapBy('id'));

      await post.save();
      this.transitionTo('posts');
    }
  }
});
