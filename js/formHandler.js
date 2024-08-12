const imageUploader = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const textUpload = imageOverlay.querySelector('.img-upload__text');

/* загружаем картинку и открываем окно предпросмотра */
imageUploader.oninput = function () {
  imageOverlay.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  /* подставляем загруженную картинку в предпросмотр */
  /* imageOverlay.querySelector('img').src = imageUploader.value; */
};


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
function validateHashtags(value) {
  /* превращаем строку ввода в массив */
  const hashtagsMassive = value.split(' ');
  let result = true;
  /* проверяем по регулярке */
  for(let i = 0; i < hashtagsMassive.length; i++) {
    const hashtag = /^#[a-zа-яё0-9]{0,19}$/i;
    if(!hashtag.test(hashtagsMassive[i])) {
      result = false;
    }
  }
  /* проверяем на дубликаты */
  hashtagsMassive.filter((number, index, numbers) => {
    if(numbers.indexOf(number) !== index) {
      result = false;
    }
  });
  /* проверяем на количество */
  if(hashtagsMassive.length > 4) {
    result = false;
  }
  return result;
}

/* Блокировка кнопки отправки
imageOverlay.querySelector('#upload-submit').disabled = true */
/* textUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
}); */

/* добавляем валидатор хэштега */
pristine.addValidator(
  textUpload.querySelector('.text__hashtags'),
  validateHashtags,
  'Хэштег не может быть длиннее 20 символов и содержать пробелы, спецсимволы, символы пунктуации и эмодзи',
  1,
  true
);

export { imageUploader };
