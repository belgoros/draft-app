import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import { isPresent } from '@ember/utils';
import config from '../config/environment';

export default Component.extend({
  activeStorage: service(),

  uploadProgress: 0,

  actions: {
    upload(event) {
      const files = event.target.files;
      if (isPresent(files)) {
        const directUploadURL = `${config.apiHost}/rails/active_storage/direct_uploads`;
        for (var i = 0; i < files.length; i++) {
          get(this, 'activeStorage').upload(files.item(i), directUploadURL, {
            onProgress: (progress) => {
              set(this, 'uploadProgress', progress);
            }
          }).then( (blob) => {
            get(this, 'onFileUploaded')(blob);
          });
        }
      }
    }
  }
});
