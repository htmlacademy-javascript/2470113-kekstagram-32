import { getErrorMessage } from './errors';
import { addPhotosList } from './generatePhotos';
import { onPhotosListClick } from './displayBigPicture.js';

const photoDBLoader = () => () => fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((photos) => {
    addPhotosList(photos);

  })
  .catch((err) => {
    getErrorMessage(err);
  });

photoDBLoader();
