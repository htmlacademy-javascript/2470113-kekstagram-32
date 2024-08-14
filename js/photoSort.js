import { addPhotosList } from './generatePhotos.js';
import { photoDB } from './main.js';

const filtersForm = document.querySelector('.img-filters__form');
const buttonDefault = document.querySelector('#filter-default');
const buttonRandom = document.querySelector('#filter-random');
const buttonDiscussed = document.querySelector('#filter-discussed');
const previews = document.querySelector('.pictures');

buttonDefault.addEventListener('click', () => {
  for(const child of filtersForm.children) {
    child.classList.remove('img-filters__button--active');
  }
  while(previews.children[2]) {
    previews.lastChild.remove();
  }
  buttonDefault.classList.add('img-filters__button--active');
  addPhotosList(photoDB);
});

buttonRandom.addEventListener('click', () => {

  while(previews.children[2]) {
    previews.lastChild.remove();
  }

  for(const child of filtersForm.children) {
    child.classList.remove('img-filters__button--active');
  }
  buttonRandom.classList.add('img-filters__button--active');

  const tempPhotos = photoDB.map((element) => element);
  tempPhotos.sort(() => Math.random() - 0.5);
  const randomPhotos = tempPhotos.slice(0, 10);
  addPhotosList(randomPhotos);
});

buttonDiscussed.addEventListener('click', () => {
  while(previews.children[2]) {
    previews.lastChild.remove();
  }

  for(const child of filtersForm.children) {
    child.classList.remove('img-filters__button--active');
  }
  buttonDiscussed.classList.add('img-filters__button--active');
  const discussedPhotos = photoDB.map((element) => element).sort((a, b) => a.comments.length - b.comments.length).reverse();
  addPhotosList(discussedPhotos);
});
