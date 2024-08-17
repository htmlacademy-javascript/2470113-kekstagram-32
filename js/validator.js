const imageOverlayNode = document.querySelector('.img-upload__overlay');
const textUploadElement = imageOverlayNode.querySelector('.img-upload__text');
const CommentFieldElement = textUploadElement.querySelector('.text__description');

/* создаем конфиг валидатора */
const pristine = new Pristine (textUploadElement, {
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
  if(value.length > 0) {
    for(let i = 0; i < hashtagsMassive.length; i++) {
      const hashtag = /^#[a-zа-яё0-9]{0,19}$/i;
      if(!hashtag.test(hashtagsMassive[i])) {
        imageOverlayNode.querySelector('#upload-submit').disabled = true;
        result = false;
      } else {
        imageOverlayNode.querySelector('#upload-submit').disabled = false;
      }
    }
  }
  return result;
}
function validateRepeats (value) {
  /* проверяем на дубликаты */
  const hashtagsMassive = value.toLowerCase().split(' ');
  let result = true;
  hashtagsMassive.filter((hashtag, index, hashtags) => {
    if(hashtags.indexOf(hashtag) !== index) {
      imageOverlayNode.querySelector('#upload-submit').disabled = true;
      result = false;
    } else {
      imageOverlayNode.querySelector('#upload-submit').disabled = false;
    }
  }
  );
  return result;
}
function validateCommentLength (value) {
  let result = true;
  if(value.length > 140) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

function validateNumber (value) {
  /* проверяем на дубликаты */
  const hashtagsMassive = value.split(' ');
  let result = true;
  /* проверяем на количество */
  if(hashtagsMassive.length > 5) {
    result = false;
    imageOverlayNode.querySelector('#upload-submit').disabled = true;
  } else {
    imageOverlayNode.querySelector('#upload-submit').disabled = false;
  }
  return result;
}

/* добавляем валидатор хэштега */
pristine.addValidator(
  textUploadElement.querySelector('.text__hashtags'),
  validateHashtag,
  'Хэштег не может быть длиннее 20 символов и содержать пробелы, спецсимволы, символы пунктуации и эмодзи',
  0,
  true
);

pristine.addValidator(
  CommentFieldElement,
  validateCommentLength,
  'Комментарий не может быть длиннее 140 символов',
  0,
  true
);
pristine.addValidator(
  textUploadElement.querySelector('.text__hashtags'),
  validateRepeats,
  'Хэштеги повторяются',
  2,
  true
);

pristine.addValidator(
  textUploadElement.querySelector('.text__hashtags'),
  validateNumber,
  'Превышено количество хэштегов',
  3,
  true
);

export { pristine };
