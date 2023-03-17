import {createPosts} from './data.js';
import fullPost from './fullPhotos.js';

const similarListTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const picturesData = createPosts();

const createPost = (data) => {
  const post = similarListTemplate.cloneNode(true);
  const pictureImg = post.querySelector('.picture__img');
  pictureImg.src = data.url;
  pictureImg.dataset.likes = data.likes;
  pictureImg.dataset.commentscount = data.comments.length;
  post.querySelector('.picture__comments').textContent = data.comments.length;
  post.querySelector('.picture__likes').textContent = data.likes;

  post.addEventListener('click', () => fullPost(data));
  return post;
};

const renderPosts = () => {
  picturesData.forEach((item) => picturesList.append(createPost(item)));
};

export {renderPosts};
