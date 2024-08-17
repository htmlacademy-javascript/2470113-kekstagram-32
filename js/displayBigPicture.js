import {photosData} from './api.js';
const bigPictureNode = document.querySelector('.big-picture');
const photosSectionNode = document.querySelector('section.pictures');
import { clearCommentsList } from './clearCommentsList.js';
import { commentsGenerating } from './commentsLoading.js';
import { COMMENTS_QUANTITY } from './commentsLoading.js';

/* создаем обработчик события для миниатюр */
function onPhotosListClick (evt) {
  if (evt.target.matches('img.picture__img')) {
    evt.preventDefault();
    document.body.classList.add('modal-open');
    bigPictureNode.classList.remove('hidden');
    bigPictureNode.querySelector('img').src = photosData[evt.target.id].url;
    bigPictureNode.querySelector('.social__caption').textContent = photosData[evt.target.id].description;
    bigPictureNode.querySelector('.likes-count').textContent = photosData[evt.target.id].likes;

    /* удаляем старые комменты перед генерацией новых */
    clearCommentsList ();

    /* разметка комментариев, начинаем с 0 */
    let commentIndex = commentsGenerating(0, evt.target.id);

    /* проверяем количество комментов и скрываем служебную информацию, если комментов меньше или равно 5 */
    if (photosData[evt.target.id].comments.length <= COMMENTS_QUANTITY) {
      bigPictureNode.querySelector('.social__comment-count').classList.add('hidden');
      bigPictureNode.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      bigPictureNode.querySelector('.social__comment-count').classList.remove('hidden');
      bigPictureNode.querySelector('.social__comments-loader').classList.remove('hidden');
      bigPictureNode.querySelector('.social__comment-shown-count').textContent = commentIndex;
      bigPictureNode.querySelector('.social__comment-total-count').textContent = photosData[evt.target.id].comments.length;
      bigPictureNode.querySelector('.social__comment-total-count').textContent = photosData[evt.target.id].comments.length;
    }

    /* добавляем обработчик кнопке «загрузить еще» */
    bigPictureNode.querySelector('.social__comments-loader').addEventListener('click', () => {
      commentIndex = commentsGenerating(commentIndex, evt.target.id);
      bigPictureNode.querySelector('.social__comment-shown-count').textContent = commentIndex;

      /* скрываем «загрузить еще», если все комменты видны */
      if(commentIndex === photosData[evt.target.id].comments.length) {
        bigPictureNode.querySelector('.social__comments-loader').classList.add('hidden');
      } else {
        bigPictureNode.querySelector('.social__comments-loader').classList.remove('hidden');
      }
      return commentIndex;
    });
  }
}
/* добавляем на все миниатюры страницы */
photosSectionNode.addEventListener('click', onPhotosListClick);
