import {photoDB} from './createPhotoDB.js';
import { PHOTOS_LIST, BIG_PICTURE } from './data.js';
import { clearCommentsList } from './clearCommentsList.js';
import {commentsGenerating } from './commentsLoading.js';

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
    const indexDB = evt.target.id - 1;

    BIG_PICTURE.classList.remove('hidden');
    BIG_PICTURE.querySelector('img').src = photoDB[indexDB].url;
    BIG_PICTURE.querySelector('.social__caption').textContent = photoDB[indexDB].alt;
    BIG_PICTURE.querySelector('.likes-count').textContent = photoDB[indexDB].likes;

    /* удаляем старые комменты перед генерацией новых */
    clearCommentsList ();

    /* разметка комментариев, начинаем с 0 */
    const commentsNumber = commentsGenerating(0, indexDB);

    /* проверяем количество комментов и скрываем служебную информацию, если комментов меньше или равно 5 */
    console.log(photoDB[indexDB].comments.length);
    if(photoDB[indexDB].comments.length <= 5) {
      BIG_PICTURE.querySelector('.social__comment-count').classList.add('hidden');
      BIG_PICTURE.querySelector('.social__comments-loader').classList.add('hidden');
    } else {
      BIG_PICTURE.querySelector('.social__comment-shown-count').textContent = commentsNumber + 1;
      BIG_PICTURE.querySelector('.social__comment-total-count').textContent = photoDB[indexDB].comments.length;
    }
    return indexDB;
  }
}
/* добавляем на все миниатюры страницы */
PHOTOS_LIST.addEventListener('click', onPhotosListClick);

/* добавляем обработчик кнопке «загрузить еще» */
BIG_PICTURE.querySelector('.social__comments-loader').addEventListener('click', () => {
  console.log('click');
});

{/* <section class="big-picture  overlay  hidden">
      <h2 class="big-picture__title  visually-hidden">Просмотр фотографии</h2>
      <div class="big-picture__preview">

        <!-- Просмотр изображения -->
        <div class="big-picture__img">
          <img src="img/logo-background-3.jpg" alt="Девушка в купальнике" width="600" height="600">
        </div>

        <!-- Информация об изображении. Подпись, комментарии, количество лайков -->
        <div class="big-picture__social  social">
          <div class="social__header">
            <img class="social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35">
            <p class="social__caption">Тестим новую камеру! =)</p>
            <p class="social__likes">Нравится <span class="likes-count">356</span></p>
          </div>

          <!-- Комментарии к изображению -->
          <div class="social__comment-count"><span class="social__comment-shown-count">5</span> из <span class="social__comment-total-count">125</span> комментариев</div>
          <ul class="social__comments">
            <li class="social__comment">
              <img class="social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35">
              <p class="social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
            </li>
            <li class="social__comment">
              <img class="social__picture" src="img/avatar-3.svg" alt="Аватар комментатора фотографии" width="35" height="35">
              <p class="social__text">Да это фоташоп!!!!!!!!</p>
            </li>
          </ul>

          <!-- Кнопка для загрузки новой порции комментариев -->
          <button type="button" class="social__comments-loader  comments-loader">Загрузить еще</button>

          <!-- Форма для отправки комментария -->
          <div class="social__footer">
            <img class="social__picture" src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35">
            <input type="text" class="social__footer-text" placeholder="Ваш комментарий...">
            <button type="button" class="social__footer-btn" name="button">Отправить</button>
          </div>
        </div>

        <!-- Кнопка для выхода из полноэкранного просмотра изображения -->
        <button type="reset" class="big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>
      </div>
    </section> */}
