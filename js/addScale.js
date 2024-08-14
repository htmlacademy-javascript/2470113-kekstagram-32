/*масштаб изображения */
const image = document.querySelector('.img-upload__preview img');
const scaleReduce = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const scaleIncrease = document.querySelector('.scale__control--bigger');
let i = 1;
image.style.transform = `scale(${ i })`;
scaleReduce.addEventListener('click', () => {
  if(i >= 0.5){
    i = i - 0.25;
    image.style.transform = `scale(${ i })`;
    scaleValue.value = `${i * 100 }%`;
    return i;
  }
});
scaleIncrease.addEventListener('click', () => {
  if(i < 1){
    i = i + 0.25;
    image.style.transform = `scale(${ i })`;
    scaleValue.value = `${i * 100 }%`;
    return i;
  }
});
