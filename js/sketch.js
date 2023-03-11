import {createPosts} from './data';

const similarListTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarListElement = document.querySelector('pictures');

const similarPosts = createPosts();

const similarListFragment = document.createDocumentFragment();

createSimilarPosts.forEach(({ url, likes, comments}) => {
  const postElement = similarListTemplate.cloneNode(true);
  postElement.querySelector('.picture__img').src = url;
  postElement.querySelector('.picture__comments').textContent = comments;
  postElement.querySelector('.picture__likes').textContent = likes;
  similarListElement.appendChild(postElement);
});

similarListElement.appendChild(similarListFragment);

export {createSimilarPosts};
