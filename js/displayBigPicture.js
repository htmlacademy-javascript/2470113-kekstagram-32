import {photosData} from './api.js';
import { clearCommentsList } from './clearCommentsList.js';
import { COMMENTS_QUANTITY } from './commentsLoading.js';
import { commentsGenerating, addCommentsLoader } from './commentsLoading.js';
const bigPictureNode = document.querySelector('.big-picture');
const commentsListNode = bigPictureNode.querySelector('.social__comments');
const photosSectionNode = document.querySelector('section.pictures');
let photoID;
/* создаем обработчик события для миниатюр */
function onPhotosListClick (evt) {
  photoID = evt.target.id;
  if (evt.target.matches('img.picture__img')) {
    evt.preventDefault();
    document.body.classList.add('modal-open');
    /* открываем слой и наполняем его данными из базы */
    bigPictureNode.classList.remove('hidden');
    bigPictureNode.querySelector('img').src = photosData[photoID].url;
    bigPictureNode.querySelector('.social__caption').textContent = photosData[photoID].description;
    bigPictureNode.querySelector('.likes-count').textContent = photosData[photoID].likes;

    /* удаляем старые комменты перед генерацией новых */
    clearCommentsList ();
    /* создаем первые 5 комментов */
    commentsGenerating();

    /* проверяем количество комментов и скрываем служебную информацию, если комментов меньше или равно 5 */
    if (photosData[evt.target.id].comments.length <= COMMENTS_QUANTITY) {
      bigPictureNode.querySelector('.social__comment-count').classList.add('hidden');
      bigPictureNode.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      bigPictureNode.querySelector('.social__comment-count').classList.remove('hidden');
      bigPictureNode.querySelector('.social__comments-loader').classList.remove('hidden');
      bigPictureNode.querySelector('.social__comment-shown-count').textContent = commentsListNode.children.length;
      bigPictureNode.querySelector('.social__comment-total-count').textContent = photosData[photoID].comments.length;
    }
  }
  bigPictureNode.querySelector('.social__comments-loader').addEventListener('click', addCommentsLoader);
}
/* добавляем на все миниатюры страницы */
photosSectionNode.addEventListener('click', onPhotosListClick);
export { photoID};
