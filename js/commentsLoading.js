import { photosData } from './api.js';
const bigPictureNode = document.querySelector('.big-picture');
const commentTemplate = bigPictureNode.querySelector('.social__comment');
const COMMENTS_QUANTITY = 5;

function commentsGenerating (commentIndex, photoIndex) {
  /* задаем индекс последнего отрисованного коммента */
  let lastCommentIndex = commentIndex;
  let commentsLoaded;
  /* проверяем, сколько комментов осталось загрузить */
  if(photosData[photoIndex].comments.length - lastCommentIndex < COMMENTS_QUANTITY) {
    commentsLoaded = photosData[photoIndex].comments.length - lastCommentIndex;
  } else {
    commentsLoaded = COMMENTS_QUANTITY;
  }
  for (let i = 0; i < commentsLoaded; i++) {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = photosData[photoIndex].comments[commentIndex + i].avatar;
    newComment.querySelector('.social__picture').alt = photosData[photoIndex].comments[commentIndex + i].name;
    newComment.querySelector('.social__text').textContent = photosData[photoIndex].comments[commentIndex + i].message;
    bigPictureNode.querySelector('.social__comments').appendChild(newComment);
    lastCommentIndex++;
  }
  return lastCommentIndex;
}

export {COMMENTS_QUANTITY, commentsGenerating};
