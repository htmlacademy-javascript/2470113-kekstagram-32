import {PHOTO_NUMBER, MAX_COMMENT_NUMBER, COMMENT_TEXTS, NAMES} from './data.js';
import {getRandomInt} from './getRandomInt.js';
import {createRandomId} from './createRandomId.js';

const commentId = createRandomId(1, PHOTO_NUMBER * MAX_COMMENT_NUMBER + 1);

/* генерируем массив со случайным числом комментов */
function createComment() {
  const comments = [];
  for(let i = 1; i <= getRandomInt(0,MAX_COMMENT_NUMBER + 1);i++) {
    const comment = {};
    comment.id = commentId();
    comment.avatar = `img/avatar-${getRandomInt(1, 7)}.svg`;
    comment.name = NAMES[getRandomInt(0, NAMES.length)];
    comment.message = COMMENT_TEXTS[getRandomInt(0, COMMENT_TEXTS.length)];
    comments.push(comment);
  }
  return comments;
}

export {createComment};
