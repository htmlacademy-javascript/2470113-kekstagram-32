import {photosData} from './api.js';
const bigPictureNode = document.querySelector('.big-picture');
const photosSectionNode = document.querySelector('section.pictures');
import { clearCommentsList } from './clearCommentsList.js';
import { commentsGenerating, addCommentsLoader } from './commentsLoading.js';
import { COMMENTS_QUANTITY } from './commentsLoading.js';
/* создаем обработчик события для миниатюр */
function onPhotosListClick (evt) {
  /* при прокликивании фото копятся итерации для обработчика «Загрузить еще». Почему? */
  const photoID = evt.target.id;
  if (evt.target.matches('img.picture__img')) {
    evt.preventDefault();
    document.body.classList.add('modal-open');
    bigPictureNode.classList.remove('hidden');
    bigPictureNode.querySelector('img').src = photosData[photoID].url;
    bigPictureNode.querySelector('.social__caption').textContent = photosData[photoID].description;
    bigPictureNode.querySelector('.likes-count').textContent = photosData[photoID].likes;

    /* удаляем старые комменты перед генерацией новых */
    clearCommentsList ();

    /* разметка комментариев, начинаем с 0 */
    const commentIndex = commentsGenerating(0, photoID);
    /* проверяем количество комментов и скрываем служебную информацию, если комментов меньше или равно 5 */
    if (photosData[evt.target.id].comments.length <= COMMENTS_QUANTITY) {
      bigPictureNode.querySelector('.social__comment-count').classList.add('hidden');
      bigPictureNode.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      bigPictureNode.querySelector('.social__comment-count').classList.remove('hidden');
      bigPictureNode.querySelector('.social__comments-loader').classList.remove('hidden');
      bigPictureNode.querySelector('.social__comment-shown-count').textContent = commentIndex;
      bigPictureNode.querySelector('.social__comment-total-count').textContent = photosData[photoID].comments.length;
      bigPictureNode.querySelector('.social__comment-total-count').textContent = photosData[photoID].comments.length;
    }

    /* добавляем обработчик кнопке «загрузить еще». Непонятно, как передать в него photoID из функции */
    bigPictureNode.querySelector('.social__comments-loader').addEventListener('click', (commentIndex, photoID) => {
      addCommentsLoader();
    });
  }
}
/* добавляем на все миниатюры страницы */
photosSectionNode.addEventListener('click', onPhotosListClick);
