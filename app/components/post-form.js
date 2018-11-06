import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({
  tagName: '',

  init() {
    this._super(...arguments);
    this.tags = this._dummyTags();
    this._setSelectedTags();
  },

  actions: {
    setPostPhoto(blob) {
      this.set('post.photo', blob.get('signedId'));
    },

    selectTag(selectedSports) {
      let all = this._allSportsEntry();
      if (selectedSports.mapBy('id').includes(all.get('id'))) {
        this.tags.setEach('selected', true);
        this.set('post.selectedTags', this.tags);
      } else {
        this.tags.setEach('selected', false);
        selectedSports.setEach('selected', true);
        this.set('post.selectedTags', selectedSports);
      }
    },

    savePost() {
      this.submitAction();
    }
  },

  _setSelectedTags() {
    let post = this.get('post');
    let post_tag_ids = post.get('tag_ids') || [];
    let filtered = this.get('tags').filter(tag => {
      return post_tag_ids.includes(tag.id);
    });

    filtered.forEach(tag => tag.set('selected', true));

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

    let tags = [foot, voley, handball];
    tags.insertAt(0, this._allSportsEntry());

    return tags;
  },

  _allSportsEntry() {
    let all = EmberObject.create({
      id: 1111,
      label: 'All sports'
    });

    return all;
  }

});
