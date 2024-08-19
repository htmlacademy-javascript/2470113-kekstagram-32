import { sendData } from './api';
import { getErrorMessage, getSuccessMessage } from './messages';
import {resetSettings} from './closeOverlay.js';
const imageOverlay = document.querySelector('.img-upload__overlay');
const imageFileUploader = document.querySelector('#upload-file');
const form = document.querySelector('.img-upload__form');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const effectPreviews = imageOverlay.querySelectorAll('.effects__preview');
const submitButton = document.querySelector('#upload-submit');

/* Проверяем файл и подставляем его в оверлей */
imageFileUploader.addEventListener('change', () => {
  const file = imageFileUploader.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if(matches) {
    imageOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    imageOverlay.querySelector('img').src = URL.createObjectURL(file);
    for (const effectPreview of effectPreviews) {
      effectPreview.style.setProperty(
        'background-image',
        `url(${ URL.createObjectURL(file) })`
      );
    }
  }
});
/* функция отправки данных */
function sendFormData () {
  submitButton.disabled = true;
  sendData(new FormData(form))
    .then(getSuccessMessage, resetSettings)
    .catch(getErrorMessage)
    .finally((submitButton.disabled = false));
}

/* добавляем обработчик и отправку запроса */
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendFormData();
});


export {imageFileUploader};

