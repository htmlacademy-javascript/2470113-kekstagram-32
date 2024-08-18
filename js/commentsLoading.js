import { photosData } from './api.js';
const bigPictureNode = document.querySelector('.big-picture');
const commentTemplate = bigPictureNode.querySelector('.social__comment');
const COMMENTS_QUANTITY = 5;

function commentsGenerating (commentIndex, photoID) {
  /* задаем индекс последнего отрисованного коммента */
  let lastCommentIndex = commentIndex;
  let commentsLoaded;
  /* проверяем, сколько комментов осталось загрузить */
  if(photosData[photoID].comments.length - lastCommentIndex < COMMENTS_QUANTITY) {
    commentsLoaded = photosData[photoID].comments.length - lastCommentIndex;
  } else {
    commentsLoaded = COMMENTS_QUANTITY;
  }
  for (let i = 0; i < commentsLoaded; i++) {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = photosData[photoID].comments[commentIndex + i].avatar;
    newComment.querySelector('.social__picture').alt = photosData[photoID].comments[commentIndex + i].name;
    newComment.querySelector('.social__text').textContent = photosData[photoID].comments[commentIndex + i].message;
    newComment.id = photosData[photoID].comments[commentIndex + i].id;
    bigPictureNode.querySelector('.social__comments').appendChild(newComment);
    lastCommentIndex++;
  }
  return lastCommentIndex;
}

function addCommentsLoader (commentIndex, photoID) {
  console.log(`ID ${photoID}`);
  bigPictureNode.querySelector('.social__comment-shown-count').textContent = commentsGenerating(commentIndex, photoID);

  /* скрываем «загрузить еще», если все комменты видны */
  if(commentIndex === photosData[photoID].comments.length) {
    bigPictureNode.querySelector('.social__comments-loader').classList.add('hidden');
  } else {
    bigPictureNode.querySelector('.social__comments-loader').classList.remove('hidden');
  }
  return commentIndex;
}

export {COMMENTS_QUANTITY, commentsGenerating, addCommentsLoader};
