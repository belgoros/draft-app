import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionToRoute('posts');
    }
  }
});
