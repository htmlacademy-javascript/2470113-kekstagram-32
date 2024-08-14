import {TEMPLATE} from './data.js';
const PICTURE_TEMPLATE = TEMPLATE.querySelector('.picture');
const PHOTOS_LIST = document.querySelector('section.pictures');
function addPhotosList (photos) {
  for (let i = 0; i < photos.length;i++) {
    const newPhotoCopy = PICTURE_TEMPLATE.cloneNode(true);
    newPhotoCopy.querySelector('.picture__img').src = photos[i].url;
    newPhotoCopy.querySelector('.picture__img').alt = photos[i].description;
    newPhotoCopy.querySelector('.picture__likes').textContent = photos[i].likes;
    newPhotoCopy.querySelector('.picture__comments').textContent = photos[i].comments.length;
    /* добавляем ID для связи с большим изображением */
    newPhotoCopy.querySelector('.picture__img').id = photos[i].id;
    PHOTOS_LIST.appendChild(newPhotoCopy);
  }
}


export {addPhotosList};
