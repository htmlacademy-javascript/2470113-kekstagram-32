/*масштаб изображения */
const imageElement = document.querySelector('.img-upload__preview img');
const scaleValueElement = document.querySelector('.scale__control--value');
const scaleFieldNode = document.querySelector('.img-upload__scale');

const MIN_COEFFICIENT = 0.25;
const MAX_COEFFICIENT = 1;
const SCALE_STEP = 0.25;
let scaleCoefficient = 1;
imageElement.style.setProperty('transform', `scale(${ scaleCoefficient })`);

const onScaleClick = function(evt) {
  if (evt.target.classList.contains('scale__control--smaller') && scaleCoefficient > MIN_COEFFICIENT) {
    scaleCoefficient = scaleCoefficient - SCALE_STEP;
    imageElement.style.setProperty('transform', `scale(${ scaleCoefficient })`);
    scaleValueElement.setAttribute('value', `${scaleCoefficient * 100 }%`);
  }
  if(evt.target.classList.contains('scale__control--bigger') && scaleCoefficient < MAX_COEFFICIENT) {
    scaleCoefficient = scaleCoefficient + SCALE_STEP;
    imageElement.style.setProperty('transform', `scale(${ scaleCoefficient })`);
    scaleValueElement.setAttribute('value', `${scaleCoefficient * 100 }%`);
    return scaleCoefficient;

  }
  return scaleCoefficient;
};
scaleFieldNode.addEventListener('click',onScaleClick);
