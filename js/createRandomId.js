import {getRandomInt} from './getRandomInt.js';

/* генерируем случайный неповторяющийся ID коммента*/
function createRandomId (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInt(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {createRandomId};
