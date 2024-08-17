const pictureTemplateElement = document.querySelector('#picture').content;
const photosSectionNode = document.querySelector('section.pictures');

function addPhotosList (photos) {
  for (let i = 0; i < photos.length;i++) {
    const newPhotoCopy = pictureTemplateElement.cloneNode(true);
    newPhotoCopy.querySelector('.picture__img').src = photos[i].url;
    newPhotoCopy.querySelector('.picture__img').alt = photos[i].description;
    /* добавляем ID для связи с большим изображением */
    newPhotoCopy.querySelector('.picture__img').id = photos[i].id;
    newPhotoCopy.querySelector('.picture__likes').textContent = photos[i].likes;
    newPhotoCopy.querySelector('.picture__comments').textContent = photos[i].comments.length;
    photosSectionNode.appendChild(newPhotoCopy);
  }
}

export {addPhotosList};
