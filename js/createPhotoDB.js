import {PHOTO_NUMBER, PHOTO_DESCRIPTIONS} from './data.js';
import {getRandomInt} from './getRandomInt.js';
import {createComment} from './createComment.js';

/* Генерируем описание фото и собираем их воедино в массив*/
const photoDB = [];
function createDescription () {
  for(let i = 1; i <= PHOTO_NUMBER; i++) {
    const photo = {};
    photo.id = i;
    photo.url = `photos/${i }.jpg`;
    photo.description = PHOTO_DESCRIPTIONS[getRandomInt(0, PHOTO_DESCRIPTIONS.length)];
    photo.likes = getRandomInt(15, 200);
    photo.comments = createComment();
    photoDB.push(photo);
  }
  return photoDB;
}
createDescription ();
export {photoDB};
