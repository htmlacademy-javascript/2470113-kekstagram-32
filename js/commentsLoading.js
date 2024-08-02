import { photoDB } from './createPhotoDB';
import { BIG_PICTURE, COMMENT_TEMPLATE } from './data';

function commentsGenerating (loadedComments, indexDB) {
  let commentIndex = 0;
  for (let i = 0; i < 5; i++) {
    const newComment = COMMENT_TEMPLATE.cloneNode(true);
    newComment.querySelector('.social__picture').src = photoDB[indexDB].comments[loadedComments + i].avatar;
    newComment.querySelector('.social__picture').alt = photoDB[indexDB].comments[loadedComments + i].name;
    newComment.querySelector('.social__text').textContent = photoDB[indexDB].comments[loadedComments + i].message;
    BIG_PICTURE.querySelector('.social__comments').appendChild(newComment);
    commentIndex = i;
  }
  return commentIndex;
}

export {commentsGenerating};
