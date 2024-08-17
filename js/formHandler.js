import { sendData } from './api';
import { getErrorMessage, getSuccessMessage } from './messages';
const imageUploader = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const effectPreviews = imageOverlay.querySelectorAll('.effects__preview');
const submitButton = imageUploader.querySelector('#upload-submit');

/* Проверяем файл и подставляем его в оверлей */
imageUploader.addEventListener('change', () => {
  const file = imageUploader.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if(matches) {
    imageOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    imageOverlay.querySelector('img').src = URL.createObjectURL(file);
    for (const effectPreview of effectPreviews) {
      effectPreview.style.setProperty('background-image',`url(${ URL.createObjectURL(file) })`);
    }
  }
});

function sendFormData (evt) {
  submitButton.disabled = true;
  sendData(new FormData(evt.target))
    .then(getSuccessMessage())
    .catch(getErrorMessage())
    .finally(submitButton.disabled = false);
}

/* добавляем обработчик и отправку запроса */
imageUploader.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendFormData();
});


export {sendFormData, imageUploader};

