/* слайдер эффектов */
const image = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const originalEffect = document.querySelector('#effect-none');
const chromeEffect = document.querySelector('#effect-chrome');
const sepiaEffect = document.querySelector('#effect-sepia');
const marvinEffect = document.querySelector('#effect-marvin');
const phobosEffect = document.querySelector('#effect-phobos');
const heatEffect = document.querySelector('#effect-heat');
let filterName;
let measureUnit;

/* создаем слайдер */
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

/* прячем слайдер по умолчанию */
document.querySelector('.img-upload__effect-level').classList.add('hidden');
/* Задаем применение фильтра на изображение */
image.style.filter = `${filterName }(${ valueElement.value }${measureUnit })`;

/* записываем значение слайдера */
sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  image.style.filter = `${filterName }(${ valueElement.value }${measureUnit })`;
});

/* отменяем все эффекты и прячем слайдер */
originalEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    document.querySelector('.img-upload__effect-level').classList.add('hidden');
    image.style.filter = 'none';
  }
});

/* эффект Хром и его слайдер */
chromeEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      step: 0.1
    });
    sliderElement.noUiSlider.set(1);
    filterName = 'grayscale';
    measureUnit = '';
    image.style.filter = `${filterName }(${ valueElement.value }${measureUnit })`;
  }
});
sepiaEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      step: 0.1
    });
    sliderElement.noUiSlider.set(1);
    filterName = 'sepia';
    measureUnit = '';
    image.style.filter = `${filterName }(${ valueElement.value }${measureUnit })`;
  }
});
marvinEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      step: 1
    });
    sliderElement.noUiSlider.set(100);
    filterName = 'invert';
    measureUnit = '%';
    image.style.filter = `${filterName }(${ valueElement.value }${measureUnit })`;
  }
});
phobosEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      step: 0.1
    });
    sliderElement.noUiSlider.set(3);
    filterName = 'blur';
    measureUnit = 'px';
    image.style.filter = `${filterName }(${ valueElement.value }${measureUnit })`;
  }
});
heatEffect.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    document.querySelector('.img-upload__effect-level').classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      step: 0.1
    });
    sliderElement.noUiSlider.set(3);
    filterName = 'brightness';
    measureUnit = '';
    image.style.filter = `${filterName }(${ valueElement.value }${measureUnit })`;
  }
}
);
