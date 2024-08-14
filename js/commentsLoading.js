import { photoDB } from './main.js';
import { photoDB } from './createPhotoDB';
import { BIG_PICTURE, COMMENT_TEMPLATE } from './data';

function commentsGenerating (commentIndex, indexDB) {
  /* проверяем, меньше ли 5 количество оставшихся комментов */
  let commentNumber = commentIndex;
  if(photoDB[indexDB].comments.length - commentIndex <= 5) {
    for (let i = 0; i < photoDB[indexDB].comments.length - commentIndex; i++) {
      const newComment = COMMENT_TEMPLATE.cloneNode(true);
      newComment.querySelector('.social__picture').src = photoDB[indexDB].comments[commentIndex + i].avatar;
      newComment.querySelector('.social__picture').alt = photoDB[indexDB].comments[commentIndex + i].name;
      newComment.querySelector('.social__text').textContent = photoDB[indexDB].comments[commentIndex + i].message;
      BIG_PICTURE.querySelector('.social__comments').appendChild(newComment);
      commentNumber++;
    }
    return commentNumber;
  } else {
    for (let i = 0; i < 5; i++) {
      const newComment = COMMENT_TEMPLATE.cloneNode(true);
      newComment.querySelector('.social__picture').src = photoDB[indexDB].comments[commentIndex + i].avatar;
      newComment.querySelector('.social__picture').alt = photoDB[indexDB].comments[commentIndex + i].name;
      newComment.querySelector('.social__text').textContent = photoDB[indexDB].comments[commentIndex + i].message;
      BIG_PICTURE.querySelector('.social__comments').appendChild(newComment);
      commentNumber++;
    }
    return commentNumber;
  }
}

export {commentsGenerating};
