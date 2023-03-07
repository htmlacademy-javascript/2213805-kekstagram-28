import {getRandomInteger} from './util.js';

let postIndex = 1;
let commentId = 1;

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

export {createPosts};
export {createComments};
