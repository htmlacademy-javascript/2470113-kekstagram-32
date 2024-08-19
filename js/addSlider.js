/* слайдер эффектов */
const imageElement = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsListNode = document.querySelector('.effects__list');
let filterName;
let measureUnit;

/* создаем слайдер */
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

/* прячем слайдер по умолчанию */
document.querySelector('.img-upload__effect-level').classList.add('hidden');

/* Задаем применение фильтра на изображение */
function setFilter () {
  imageElement.style.setProperty('filter',`${filterName }(${ valueElement.value }${ measureUnit })`);
}

/* записываем значение слайдера */
sliderElement.noUiSlider.on('update', () => {
  valueElement.setAttribute('value', +sliderElement.noUiSlider.get());
  setFilter ();
});

const onEffectClick = function (evt) {
  document.querySelector('.img-upload__effect-level').classList.remove('hidden');
  switch(evt.target.id) {
    case ('effect-chrome'): {
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
      setFilter ();
      break;
    }
    case('effect-sepia'): {
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
      setFilter ();
      break;
    }
    case('effect-marvin'): {
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
      setFilter ();
      break;
    }
    case('effect-phobos'): {
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
      setFilter ();
      break;
    }
    case('effect-heat'): {
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
      setFilter ();
      break;
    }
    default: {
      document.querySelector('.img-upload__effect-level').classList.add('hidden');
      imageElement.style.filter = 'none';
      break;
    }
  }
};

effectsListNode.addEventListener('click',onEffectClick);
