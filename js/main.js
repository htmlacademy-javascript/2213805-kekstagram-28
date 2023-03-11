import {createPosts} from './data.js';
import {createSimilarPosts} from './sketch.js';

createPosts();
const DESCRIPTIONS = ['Посмотрите как мы катались на слонах, восторг!',
  'Год активных тренировок в зале. Ну что, я красотка?',
  'День рождения подруги',
  'Я здесь в новом амплуа, не удивляйтесь',
  'Лучшее время для маленькой сиесты',
  'Собака лучше всех получилась на фото, впрочем, как обычно',
  'Я уехал на край света, чтобы найти себя',
  'Это мы, довольные и беззаботные',
  'Не могла представить, что в Гватемале так красиво!',
];

const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Ира',
  'Федя',
  'Маша',
  'Макс',
  'Никита',
  'Лейла',
  'Юля'];

const POSTS_COUNT = 25;

let postIndex = 1;
let commentId = 1;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const createPosts = () => ({
  id: postIndex++,
  url: 'photos/${postIndex++}.jpg',
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1, 8)}, createComments),
});

const createComments = () => ({
  id: commentId++,
  avatar: 'img/avatar-${getRandomInteger(1, 6)}.svg',
  message: Array.from(
    new Set(
      Array.from({length: getRandomInteger(1, 2)}, () => MESSAGES[getRandomInteger(0, MESSAGES.length - 1)])
    )
  ).join (''),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createPosts = () => Array.from({length: POSTS_COUNT}, createPosts);

console.log(createPosts());
