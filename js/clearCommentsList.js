import { COMMENTS_LIST } from './data';

function clearCommentsList () {
  /* удаляем старые комменты перед генерацией новых */
  while (COMMENTS_LIST.firstChild) {
    COMMENTS_LIST.removeChild(COMMENTS_LIST.firstChild);
  }
}

export {clearCommentsList};
