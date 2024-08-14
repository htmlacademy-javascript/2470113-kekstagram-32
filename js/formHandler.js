import { getErrorMessage, getSuccessMessage } from './errors';
import { closeUpload } from './closeOverlay.js';
const uploadForm = document.querySelector('.img-upload__form');
const imageUploader = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const textUpload = imageOverlay.querySelector('.img-upload__text');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const submitButton = document.querySelector('#upload-submit');

/* Проверяем файл */
imageUploader.addEventListener('change', () => {
  const file = imageUploader.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if(matches) {
    imageOverlay.querySelector('img').src = URL.createObjectURL(file);
    imageOverlay.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
  }
});

/* создаем конфиг валидатора */
const pristine = new Pristine (textUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper',
  // class of the parent element where error text element is appended
  errorTextParent: 'img-upload__field-wrapper',
  // type of element to create for the error text
  errorTextTag: 'p',
  // class of the error text element
  errorTextClass: 'img-upload__field-wrapper--error'
});

/* проверяем хэштеги по регулярке */
function validateHashtag(value) {
  /* превращаем строку ввода в массив */
  const hashtagsMassive = value.split(' ');
  let result = true;
  /* проверяем по регулярке */
  for(let i = 0; i < hashtagsMassive.length; i++) {
    const hashtag = /^#[a-zа-яё0-9]{0,19}$/i;
    if(!hashtag.test(hashtagsMassive[i])) {
      imageOverlay.querySelector('#upload-submit').disabled = true;
      result = false;
    } else {
      imageOverlay.querySelector('#upload-submit').disabled = false;
    }
  }
  return result;
}
function validateRepeats (value) {
  /* проверяем на дубликаты */
  const hashtagsMassive = value.split(' ');
  let result = true;
  hashtagsMassive.filter((number, index, numbers) => {
    if(numbers.indexOf(number) !== index) {
      imageOverlay.querySelector('#upload-submit').disabled = true;
      result = false;
    } else {
      imageOverlay.querySelector('#upload-submit').disabled = false;
    }
  });
  return result;
}

function validateNumber (value) {
  /* проверяем на дубликаты */
  const hashtagsMassive = value.split(' ');
  let result = true;
  /* проверяем на количество */
  if(hashtagsMassive.length > 4) {
    result = false;
    imageOverlay.querySelector('#upload-submit').disabled = true;
  } else {
    imageOverlay.querySelector('#upload-submit').disabled = false;
  }
  return result;
}
/* Блокировка кнопки отправки
imageOverlay.querySelector('#upload-submit').disabled = true
textUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
}); */

/* добавляем валидатор хэштега */
pristine.addValidator(
  textUpload.querySelector('.text__hashtags'),
  validateHashtag,
  'Хэштег не может быть длиннее 20 символов и содержать пробелы, спецсимволы, символы пунктуации и эмодзи',
  0,
  true
);
pristine.addValidator(
  textUpload.querySelector('.text__hashtags'),
  validateRepeats,
  'Хэштеги повторяются',
  2,
  true
);

pristine.addValidator(
  textUpload.querySelector('.text__hashtags'),
  validateNumber,
  'Превышено количество хэштегов',
  3,
  true
);

/* добавляем обработчик на кнопку */
submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const formData = new FormData (uploadForm);
  const request = new XMLHttpRequest();
  request.open('POST', 'https://32.javascript.htmlacademy.pro/kekstagram');
  request.onload = function () {
    if (request.status === 200) {
      getSuccessMessage();
      closeUpload();
    } else {
      getErrorMessage();
    }
  };
  request.send(formData);
});
export { imageUploader };

/* const formData = new FormData (uploadForm); */
/* const request = new XMLHttpRequest();
  request.open('POST', 'https://32.javascript.htmlacademy.pro/kekstagram');
  request.send(formData); */
/* console.log(formData); */

/* const request = new XMLHttpRequest();
request.open('POST', 'submitform.php');
request.send(new FormData(uploadForm));
console.log(new FormData(uploadForm)); */
