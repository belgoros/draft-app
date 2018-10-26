import Controller from '@ember/controller';
import { A } from '@ember/array';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.selectedTags = [];
    this.tags = this._dummyTags();
  },

  actions: {
    selectTag(tags) {
      this.set('selectedTags', A(tags));
    },

    savePost() {

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
