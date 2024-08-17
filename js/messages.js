const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;
const dataErrorTemplate = document.querySelector('#data-error').content;

function getDataErrorMessage () {
  const dataErrorMessage = dataErrorTemplate.cloneNode(true);
  dataErrorMessage.id = 'errorMessage';
  document.body.appendChild(dataErrorMessage);
  setTimeout (() => {
    document.body.removeChild(document.querySelector('.data-error'));
  }, 5000);
}

function getErrorMessage () {
  const errorMessage = errorTemplate.cloneNode(true);
  errorMessage.id = 'errorMessage';
  document.body.appendChild(errorMessage);
  const closeError = document.querySelector('.error__button');
  closeError.addEventListener('click', () =>{
    document.body.removeChild(document.querySelector('.error'));
  });
}

function getSuccessMessage () {
  const successMessage = successTemplate.cloneNode(true);
  successMessage.id = 'successMessage';
  document.body.appendChild(successMessage);
  /* добавляем кнопку закрытия для модального окна успех */
  const closeSuccess = document.querySelector('.success__button');
  closeSuccess.addEventListener('click', () =>{
    document.body.removeChild(document.querySelector('.success'));
  });

}


export { getSuccessMessage, getErrorMessage, getDataErrorMessage };
