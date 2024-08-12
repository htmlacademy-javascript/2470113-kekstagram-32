import {photoDB} from './createPhotoDB.js';
import { PHOTOS_LIST, BIG_PICTURE } from './data.js';
import { clearCommentsList } from './clearCommentsList.js';
import { commentsGenerating } from './commentsLoading.js';

/* создаем обработчик события для миниатюр */
function onPhotosListClick (evt) {
  if (evt.target.matches('img.picture__img')) {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    /* cвязываем миниатюры с базой данных по добавленному ID */
    const indexDB = evt.target.id - 1;

    BIG_PICTURE.classList.remove('hidden');
    BIG_PICTURE.querySelector('img').src = photoDB[indexDB].url;
    BIG_PICTURE.querySelector('.social__caption').textContent = photoDB[indexDB].alt;
    BIG_PICTURE.querySelector('.likes-count').textContent = photoDB[indexDB].likes;

    /* удаляем старые комменты перед генерацией новых */
    clearCommentsList ();

    /* разметка комментариев, начинаем с 0 */
    let commentIndex = commentsGenerating(0, indexDB);

    /* проверяем количество комментов и скрываем служебную информацию, если комментов меньше или равно 5 */
    if (photoDB[indexDB].comments.length <= 5) {
      BIG_PICTURE.querySelector('.social__comment-count').classList.add('hidden');
      BIG_PICTURE.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      BIG_PICTURE.querySelector('.social__comment-count').classList.remove('hidden');
      BIG_PICTURE.querySelector('.social__comments-loader').classList.remove('hidden');
      BIG_PICTURE.querySelector('.social__comment-shown-count').textContent = commentIndex;
      BIG_PICTURE.querySelector('.social__comment-total-count').textContent = photoDB[indexDB].comments.length;
    }

    /* добавляем обработчик кнопке «загрузить еще» */
    BIG_PICTURE.querySelector('.social__comments-loader').addEventListener('click', () => {
      commentIndex = commentsGenerating(commentIndex, indexDB);
      BIG_PICTURE.querySelector('.social__comment-shown-count').textContent = commentIndex;
      /* скрываем «загрузить еще», если все комменты видны */
      if(commentIndex >= photoDB[indexDB].comments.length) {
        BIG_PICTURE.querySelector('.social__comments-loader').classList.add('hidden');
      }
      return commentIndex;
    });
  }
}
/* добавляем на все миниатюры страницы */
PHOTOS_LIST.addEventListener('click', onPhotosListClick);
