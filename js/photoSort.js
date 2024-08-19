import { addPhotosList } from './addPhotosList.js';
import { photosData } from './api.js';

/* устраняем дребезг */
const RERENDER_DELAY = 500;
const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const filtersFormNode = document.querySelector('.img-filters__form');
const defaultButtonElement = document.querySelector('#filter-default');
const randomButtonElement = document.querySelector('#filter-random');
const DiscussedButtonElement = document.querySelector('#filter-discussed');
const previewsNode = document.querySelector('.pictures');

const onButtonsClick = function(evt) {
  /* сбрасываем состояние active */
  for(const child of filtersFormNode.children) {
    child.classList.remove('img-filters__button--active');
  }
  /* удаляем все добавленные ранее превью */
  while(previewsNode.children[2]) {
    previewsNode.lastChild.remove();
  }
  /* проверяем, какая кнопка нажата */
  if (evt.target.id === 'filter-default') {
    defaultButtonElement.classList.add('img-filters__button--active');
    addPhotosList(photosData);
  }
  if(evt.target.id === 'filter-random') {
    randomButtonElement.classList.add('img-filters__button--active');
    /* создаем копию массива с фотками, перемешиваем и обрезаем */
    const tempPhotos = photosData.map((element) => element).sort(() => Math.random() - 0.5).slice(0, 10);
    addPhotosList(tempPhotos);
  }
  if(evt.target.id === 'filter-discussed') {
    DiscussedButtonElement.classList.add('img-filters__button--active');
    /* создаем массив с сортировкой по длине массива комментов */
    const discussedPhotos = photosData.map((element) => element).sort((a, b) => a.comments.length - b.comments.length).reverse();
    addPhotosList(discussedPhotos);
  }
};
/* приклеиваем обработчик с задержкой 500мс */
filtersFormNode.addEventListener('click', debounce(onButtonsClick, RERENDER_DELAY));
