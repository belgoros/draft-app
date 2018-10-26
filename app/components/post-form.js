import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  submit(event) {
    event.preventDefault();
    this.postAction(this.get('post'));
  }
});
