import { photosData } from './api.js';
const bigPictureNode = document.querySelector('.big-picture');
const commentTemplate = bigPictureNode.querySelector('.social__comment');
const commentsListNode = bigPictureNode.querySelector('.social__comments');
const COMMENTS_QUANTITY = 5;
import { photoID } from './displayBigPicture.js';

function commentsGenerating () {
  /* Используем коллекции, проверяем, сколько комментов осталось загрузить */
  let commentsNumber;
  if(photosData[photoID].comments.length < COMMENTS_QUANTITY) {
    commentsNumber = photosData[photoID].comments.length;
  } else {
    commentsNumber = COMMENTS_QUANTITY;
  }
  for (let i = 0; i < commentsNumber; i++) {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = photosData[photoID].comments[i].avatar;
    newComment.querySelector('.social__picture').alt = photosData[photoID].comments[i].name;
    newComment.querySelector('.social__text').textContent = photosData[photoID].comments[i].message;
    newComment.id = photosData[photoID].comments[i].id;
    bigPictureNode.querySelector('.social__comments').appendChild(newComment);
  }
}

function addCommentsLoader () {
  bigPictureNode.querySelector('.social__comment-shown-count').textContent = commentsListNode.children.length;
  let commentsNumber;
  if(photosData[photoID].comments.length - commentsListNode.children.length < COMMENTS_QUANTITY) {
    commentsNumber = photosData[photoID].comments.length - commentsListNode.children.length;
  } else {
    commentsNumber = COMMENTS_QUANTITY;
  }
  const commentsLoaded = commentsListNode.children.length;
  for (let i = 0; i < commentsNumber; i++) {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = photosData[photoID].comments[commentsLoaded + i].avatar;
    newComment.querySelector('.social__picture').alt = photosData[photoID].comments[commentsLoaded + i].name;
    newComment.querySelector('.social__text').textContent = photosData[photoID].comments[commentsLoaded + i].message;
    newComment.id = photosData[photoID].comments[commentsLoaded + i].id;
    bigPictureNode.querySelector('.social__comments').appendChild(newComment);
  }
  bigPictureNode.querySelector('.social__comment-shown-count').textContent = commentsListNode.children.length;

  /* скрываем «загрузить еще», если все комменты видны */
  if(commentsListNode.children.length === photosData[photoID].comments.length) {
    bigPictureNode.querySelector('.social__comments-loader').classList.add('hidden');
  } else {
    bigPictureNode.querySelector('.social__comments-loader').classList.remove('hidden');
  }
}

/* добавляем обработчик кнопке «загрузить еще»*/
bigPictureNode.querySelector('.social__comments-loader').addEventListener('click', addCommentsLoader);

export {COMMENTS_QUANTITY, commentsGenerating, addCommentsLoader};
