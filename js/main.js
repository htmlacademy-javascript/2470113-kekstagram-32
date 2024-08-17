import './data.js';
import './addPhotosList.js';
import './displayBigPicture.js';
import './clearCommentsList.js';
import './commentsLoading.js';
import './validator.js';
import './formHandler.js';
import './closeOverlay.js';
import './addScale.js';
import './addSlider.js';
import './photoSort.js';
import { getSuccessMessage } from './messages.js';
import {sendFormData} from './formHandler.js';

const RERENDER_DELAY = 500;
const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

sendFormData(getSuccessMessage);

export {RERENDER_DELAY, debounce};
