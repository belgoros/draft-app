import Component from '@ember/component';
import { A } from '@ember/array';
import EmberObject from '@ember/object';

export default Component.extend({
  tagName: '',

  init() {
    this._super(...arguments);
    this.selectedTags = [];
    this.tags = this._dummyTags();
  },

  actions: {
    selectTag(tags) {
      this.set('post.selectedTags', A(tags));
    },

    saveItem() {
      this.save();
    }
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
