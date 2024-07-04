const photoDescriptions = ['Вся красота мира в одной картинке',
  'Моменты, которые запечатлены навсегда',
  'Счастье в каждом кадре',
  'Когда слова не нужны, достаточно фотографии',
  'История, рассказанная через объектив',
  'Остановить время в одном кадре',
  'Фотография — это способ улыбнуться в будущем',
  'Сегодня — самый лучший день',
  'Я не доверяю словам. Я доверяю фотографиям',
  'Фотографии — это свидетельство о том, что мы жили',
  'Момент, когда небо и земля сливаются воедино',
  'В объектив всегда видна правда — это как детектор лжи',
  'Сделано объективом и любовью',
  'Счастье никогда не выходит из моды',
  'Лишь тот, кто странствует, открывает новые пути',
  'Зарядитесь нашим теплом',
  'Жизнь лучше, когда ты смеешься'];

const commentTexts = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Алиса','Владимир','Ибрагим','Дмитрий','Михаил','Аделина','Таисия','София','Тимофей','Егор','Кирилл','Лев','Валерия','Георгий','Андрей','Максим','Евгения','Матвей','Ксения','Анастасия','Ульяна','Дарья','Амина','Сабина','Артём','Мария','Варвара','Ян','Александра','Дарина','Елена','Иван','Степан','Евгений','Руслан','Арина','Алексей','Татьяна','Константин','Маргарита','Фатима','Анна','Алия','Ева','Виктория','Григорий','Герман','Елизавета','Ярослав','Роман'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}

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
const commentId = createRandomId(1, 1254);

function createComment() {
  const comments = [];
  for(let i = 0; i <= getRandomInt(0,30);i++) {
    const comment = {};
    comment.id = commentId();
    comment.avatar = `img/avatar-${getRandomInt(1, 7)}.svg`;
    comment.name = names[getRandomInt(0, names.length)];
    comment.message = commentTexts[getRandomInt(0, commentTexts.length)];
    comments.push(comment);
  }
  return comments;
}

function createDescription () {
  const photoDB = [];
  for(let i = 1; i <= 25; i++) {
    const photo = {};
    photo.id = i;
    photo.url = `photos/${i }.jpg`;
    photo.description = photoDescriptions[getRandomInt(0, photoDescriptions.length)];
    photo.likes = getRandomInt(15, 200);
    photo.comments = createComment();
    photoDB.push(photo);
  }
  return photoDB;
}
createDescription ();
