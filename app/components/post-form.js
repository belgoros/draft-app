import Component from '@ember/component';
import { A } from '@ember/array';
import EmberObject from '@ember/object';

export default Component.extend({
  tagName: '',

  init() {
    this._super(...arguments);
    this.tags = this._dummyTags();
    this._setSelectedTags();
  },

  actions: {
    selectTag(tags) {
      this.set('post.selectedTags', A(tags));
    },

    saveItem() {
      this.submitAction();
    }
  },

  _setSelectedTags() {
    let post = this.get('post');
    let post_tag_ids = post.get('tag_ids') || [];
    let filtered = this.get('tags').filter(tag => {
      return post_tag_ids.includes(tag.id);
    });

    post.set('selectedTags', filtered);
  },

  _dummyTags() {
    let foot = EmberObject.create({
      id: 11,
      label: 'Football'
    });
    let voley = EmberObject.create({
      id: 12,
      label: 'Voleyball'
    });
    let handball = EmberObject.create({
      id: 13,
      label: 'Handball'
    });

    let tags = [foot, voley, handball]

    return tags;
  }
});
