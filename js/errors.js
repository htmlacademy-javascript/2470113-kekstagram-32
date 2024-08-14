const errorTemplate = document.querySelector('#error').content;
function getErrorMessage () {
  const errorMessage = errorTemplate.cloneNode(true);
  errorMessage.id = 'errorMessage';
  document.querySelector('body').appendChild(errorMessage);
  setTimeout (() => {
    document.querySelector('body').removeChild(document.querySelector('.error'));
  }, 5000);
}
export { getErrorMessage };
