const bigPictureNode = document.querySelector('.big-picture');
const commentsListNode = bigPictureNode.querySelector('.social__comments');

function clearCommentsList () {
  /* удаляем старые комменты перед генерацией новых */
  while (commentsListNode.firstChild) {
    commentsListNode.removeChild(commentsListNode.firstChild);
  }
}

export {clearCommentsList};
