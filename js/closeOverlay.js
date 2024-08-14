import { imageUploader } from './data.js';
import { BIG_PICTURE } from './data.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');

/* добавляем кнопку закрытия */
const closeButton = BIG_PICTURE.querySelector('.cancel').addEventListener('click', () => {
  BIG_PICTURE.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

/* добавляем закрытие по Esc */
function addCloseEsc (evt) {
  if (evt.keyCode === 27) {
    /* проверяем, не в фокусе ли поля тегов и комментария */
    if (document.activeElement !== document.querySelector('.text__hashtags') && document.activeElement !== document.querySelector('.text__description')) {
      if (!uploadOverlay.querySelector('.hidden')) {
        uploadOverlay.classList.add('hidden');
        imageUploader.value = '';
      }
      if(!(BIG_PICTURE.querySelector('.hidden'))) {
        BIG_PICTURE.classList.add('hidden');
      }
      document.querySelector('body').classList.remove('modal-open');
    }
  }
}

document.addEventListener('keydown', addCloseEsc);

/* Добавляем кнопку закрытия и сброс данных для окна загрузки */
const closeUpload = uploadOverlay.querySelector('#upload-cancel').addEventListener('click', () => {
  uploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  imageUploader.value = '';
});

export { closeButton, addCloseEsc, closeUpload };
