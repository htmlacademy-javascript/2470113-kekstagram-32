const imageUploaderNode = document.querySelector('#upload-file');
const bigPictureNode = document.querySelector('.big-picture');
const uploadOverlayNode = document.querySelector('.img-upload__overlay');
const imageElement = document.querySelector('.img-upload__preview img');
const effectsTogglesElements = document.querySelectorAll('.effects__radio');
const closeButtonElement = bigPictureNode.querySelector('.cancel');

/* добавляем кнопку закрытия */

closeButtonElement.addEventListener('click', () => {
  bigPictureNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

function resetSettings() {
  /* сбрасываем фильтры на оригинал */
  for(const effect of effectsTogglesElements) {
    effect.checked = false;
  }
  effectsTogglesElements[0].checked = true;
  imageUploaderNode.value = '';
  imageElement.style.setProperty('filter', 'none');
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
}
/* добавляем закрытие всех окон по Esc */
function addCloseEsc (evt) {
  if (evt.keyCode === 27) {
    /* проверяем, не в фокусе ли поля тегов и комментария */
    if (document.activeElement !== document.querySelector('.text__hashtags') && document.activeElement !== document.querySelector('.text__description')) {
      uploadOverlayNode.classList.add('hidden');
      resetSettings();
      bigPictureNode.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  }
}

document.addEventListener('keydown', addCloseEsc);

/* Добавляем кнопку закрытия и сброс данных для окна загрузки */

function closeUploadOverlay () {
  uploadOverlayNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetSettings();
}

uploadOverlayNode.querySelector('#upload-cancel').addEventListener('click', closeUploadOverlay);

export { closeButtonElement, addCloseEsc, closeUploadOverlay };
