import {createPosts} from './data.js';

const similarListTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const picturesData = createPosts();

const createPost = (data) => {
  const post = similarListTemplate.cloneNode(true);
  post.querySelector('.picture__img').src = data.url;
  post.querySelector('.picture__comments').textContent = data.comments.length;
  post.querySelector('.picture__likes').textContent = data.likes;
  return post;
};

const renderPosts = () => {
  picturesData.forEach((item) => picturesList.append(createPost(item)));
};

export {renderPosts};
