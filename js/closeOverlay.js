import { clearCommentsList } from './clearCommentsList';
import { addCommentsLoader } from './commentsLoading';
const imageOverlayElement = document.querySelector('.img-upload__overlay');
const imageUploaderNode = document.querySelector('#upload-file');
const bigPictureNode = document.querySelector('.big-picture');
const uploadOverlayNode = document.querySelector('.img-upload__overlay');
const imageElement = document.querySelector('.img-upload__preview img');
const effectsTogglesElements = document.querySelectorAll('.effects__radio');
const closeButtonElement = bigPictureNode.querySelector('.cancel');
const effectPreviews = imageOverlayElement.querySelectorAll('.effects__preview');
const scaleValueElement = document.querySelector('.scale__control--value');
/* добавляем кнопку закрытия */

closeButtonElement.addEventListener('click', () => {
  bigPictureNode.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureNode.querySelector('.social__comments-loader').removeEventListener('click',addCommentsLoader);
});

function resetSettings() {
  /* сбрасываем все настройки и фильтры */
  for(const effect of effectsTogglesElements) {
    effect.checked = false;
  }
  effectsTogglesElements[0].checked = true;
  imageUploaderNode.value = '';
  imageOverlayElement.querySelector('img').src = '';
  for (const effectPreview of effectPreviews) {
    effectPreview.style.setProperty(
      'background-image',
      ''
    );
  }
  imageElement.style.setProperty('transform', 'scale(1)');
  scaleValueElement.setAttribute('value', '100%');
  imageElement.style.setProperty('filter', 'none');
  uploadOverlayNode.classList.add('hidden');
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
}

/* добавляем закрытие всего по Esc */
function addCloseEsc (evt) {
  if (evt.keyCode === 27) {
    document.body.classList.remove('modal-open');
    if(document.querySelector('.success')) {
      document.body.removeChild(document.querySelector('.success'));
    }
    /* проверяем, не в фокусе ли поля тегов и комментария */
    if (document.activeElement !== document.querySelector('.text__hashtags') && document.activeElement !== document.querySelector('.text__description')) {
      resetSettings();
      clearCommentsList();
      bigPictureNode.classList.add('hidden');
      bigPictureNode.querySelector('.social__comments-loader').removeEventListener('click', addCommentsLoader);
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

export { closeButtonElement, addCloseEsc, closeUploadOverlay, resetSettings };
