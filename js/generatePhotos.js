import {TEMPLATE} from './data.js';
import {createDescription} from './createDescription.js';

const PICTURE_TEMPLATE = TEMPLATE.querySelector('.picture');
const PHOTOS_LIST = document.querySelector('section.pictures');
const photoDB = createDescription();
function addPhotosList () {
  for (let i = 0; i < photoDB.length;i++) {
    const newPhotoCopy = PICTURE_TEMPLATE.cloneNode(true);
    newPhotoCopy.querySelector('.picture__img').src = photoDB[i].url;
    newPhotoCopy.querySelector('.picture__img').alt = photoDB[i].description;
    newPhotoCopy.querySelector('.picture__likes').textContent = photoDB[i].likes;
    newPhotoCopy.querySelector('.picture__comments').textContent = photoDB[i].comments.length;
    PHOTOS_LIST.appendChild(newPhotoCopy);
  }
}
addPhotosList();

{/* <template id="picture">
    <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a>
  </template> */}
