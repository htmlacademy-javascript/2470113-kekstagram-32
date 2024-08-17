import { getErrorMessage, getDataErrorMessage } from './messages';
import { addPhotosList } from './addPhotosList';
const SERVER_ADDRESS = 'https://32.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

let photosData = fetch(SERVER_ADDRESS + Route.GET_DATA)
  .then((response) => response.json())
  .then((photos) => {
    photosData = photos;
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    addPhotosList(photosData);
    return photosData;
  })
  .catch((err) => {
    getDataErrorMessage(err);
  });

const sendData = (body) => fetch(SERVER_ADDRESS + Route.SEND_DATA,
  {
    method: 'POST',
    body,
  },
)
  .then((response) => {
    if (!response.ok) {
      getErrorMessage();
    }
  })
  .catch(() => {
    getErrorMessage();
  })
  .catch(getErrorMessage);

export {photosData, sendData};
