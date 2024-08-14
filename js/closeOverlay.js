import { imageUploader } from './data.js';
import { BIG_PICTURE } from './data.js';

const uploadOverlay = document.querySelector('.img-upload__overlay');
const image = document.querySelector('.img-upload__preview img');
const effects = document.querySelectorAll('.effects__radio');
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
        for(const effect of effects) {
          effect.checked = false;
        }
        effects[0].checked = true;
        uploadOverlay.classList.add('hidden');
        imageUploader.value = '';
        image.style.filter = 'none';
        document.querySelector('.img-upload__effect-level').classList.add('hidden');

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

function closeUpload () {
  uploadOverlay.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  for(const effect of effects) {
    effect.checked = false;
  }
  effects[0].checked = true;
  imageUploader.value = '';
  image.style.filter = 'none';
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
}

uploadOverlay.querySelector('#upload-cancel').addEventListener('click', closeUpload);

export { closeButton, addCloseEsc, closeUpload };
