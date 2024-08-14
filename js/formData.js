const imageUploader = document.querySelector('#upload-file');
const textUpload = document.querySelector('.img-upload__text');
const image = document.querySelector('.img-upload__preview img');


const formData = new FormData();
function addData () {
  formData.append('file', imageUploader.value);
  formData.append('hashtags',textUpload.querySelector('.text__hashtags'));
  formData.append('description', textUpload.querySelector('.text__description'));
  formData.append('effect',image.style.filter);
}
export {addData};
