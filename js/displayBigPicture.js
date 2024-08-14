import {photoDB} from './main.js';
import { PHOTOS_LIST, BIG_PICTURE } from './data.js';
import { clearCommentsList } from './clearCommentsList.js';
import { commentsGenerating } from './commentsLoading.js';

/* создаем обработчик события для миниатюр */
function onPhotosListClick (evt) {
  if (evt.target.matches('img.picture__img')) {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');

    BIG_PICTURE.classList.remove('hidden');
    BIG_PICTURE.querySelector('img').src = photoDB[evt.target.id].url;
    BIG_PICTURE.querySelector('.social__caption').textContent = photoDB[evt.target.id].description;
    BIG_PICTURE.querySelector('.likes-count').textContent = photoDB[evt.target.id].likes;
/* добавляем кнопку закрытия */
BIG_PICTURE.querySelector('.cancel').addEventListener('click', () => {
  BIG_PICTURE.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});
/* добавляем закрытие по Esc */
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    BIG_PICTURE.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  }
});

/* создаем обработчик события для миниатюр */
function onPhotosListClick (evt) {
  if (evt.target.matches('img')) {
    evt.preventDefault();
    document.querySelector('body').classList.add('modal-open');
    /* cвязываем миниатюры с базой данных по добавленному ID */
    BIG_PICTURE.classList.remove('hidden');
    BIG_PICTURE.querySelector('img').src = photoDB[evt.target.id].url;
    BIG_PICTURE.querySelector('.social__caption').textContent = photoDB[evt.target.id].alt;
    BIG_PICTURE.querySelector('.likes-count').textContent = photoDB[evt.target.id].likes;

    /* удаляем старые комменты перед генерацией новых */
    clearCommentsList ();

    /* разметка комментариев, начинаем с 0 */
    let commentIndex = commentsGenerating(0, evt.target.id);

    /* проверяем количество комментов и скрываем служебную информацию, если комментов меньше или равно 5 */
    if (photoDB[evt.target.id].comments.length <= 5) {
    let commentIndex = commentsGenerating(0, indexDB);

    /* проверяем количество комментов и скрываем служебную информацию, если комментов меньше или равно 5 */
    if (photoDB[indexDB].comments.length <= 5) {
      BIG_PICTURE.querySelector('.social__comment-count').classList.add('hidden');
      BIG_PICTURE.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      BIG_PICTURE.querySelector('.social__comment-count').classList.remove('hidden');
      BIG_PICTURE.querySelector('.social__comments-loader').classList.remove('hidden');
      BIG_PICTURE.querySelector('.social__comment-shown-count').textContent = commentIndex;
      BIG_PICTURE.querySelector('.social__comment-total-count').textContent = photoDB[evt.target.id].comments.length;
    }

    /* добавляем обработчик кнопке «загрузить еще» */
    BIG_PICTURE.querySelector('.social__comments-loader').addEventListener('click', () => {
      commentIndex = commentsGenerating(commentIndex, evt.target.id);
      BIG_PICTURE.querySelector('.social__comment-shown-count').textContent = commentIndex;
      /* скрываем «загрузить еще», если все комменты видны */
      if(commentIndex >= photoDB[evt.target.id].comments.length) {
      commentIndex = commentsGenerating(commentIndex, evt.target.id);
      BIG_PICTURE.querySelector('.social__comment-shown-count').textContent = commentIndex;
      /* скрываем «загрузить еще», если все комменты видны */
      if(commentIndex >= photoDB[evt.target.id].comments.length) {
        BIG_PICTURE.querySelector('.social__comments-loader').classList.add('hidden');
      }
      return commentIndex;
    });
  }
}
/* добавляем на все миниатюры страницы */
PHOTOS_LIST.addEventListener('click', onPhotosListClick);
