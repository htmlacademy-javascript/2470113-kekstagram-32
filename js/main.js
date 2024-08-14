import './getRandomInt.js';
import './createRandomId.js';
import './createComment.js';
import './createPhotoDB.js';
import './data.js';
import './generatePhotos.js';
import './displayBigPicture.js';
import './clearCommentsList.js';
import './commentsLoading.js';
import './formHandler.js';
import './closeOverlay.js';
import './addScale.js';
import './addSlider.js';
import './photoSort.js';
import { getErrorMessage } from './errors';
import {addPhotosList } from './generatePhotos';

let photoDB = {};
fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((photos) => {
    photoDB = photos;
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    addPhotosList(photoDB);
    return photoDB;
  })
  .catch((err) => {
    getErrorMessage(err);
  });

export {photoDB};
