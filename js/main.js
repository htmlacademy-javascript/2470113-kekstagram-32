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

const RERENDER_DELAY = 500;
const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {RERENDER_DELAY, debounce};
