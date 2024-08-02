import {TEMPLATE} from './data.js';
import {photoDB} from './createPhotoDB.js';
import {PHOTOS_LIST} from './data.js';
const PICTURE_TEMPLATE = TEMPLATE.querySelector('.picture');

function addPhotosList () {
  for (let i = 0; i < photoDB.length;i++) {
    const newPhotoCopy = PICTURE_TEMPLATE.cloneNode(true);
    newPhotoCopy.querySelector('.picture__img').src = photoDB[i].url;
    newPhotoCopy.querySelector('.picture__img').alt = photoDB[i].description;
    newPhotoCopy.querySelector('.picture__likes').textContent = photoDB[i].likes;
    newPhotoCopy.querySelector('.picture__comments').textContent = photoDB[i].comments.length;
    /* добавляем ID для связи с большим изображением */
    newPhotoCopy.querySelector('.picture__img').id = photoDB[i].id;
    PHOTOS_LIST.appendChild(newPhotoCopy);
  }
}
addPhotosList();
export {addPhotosList};
