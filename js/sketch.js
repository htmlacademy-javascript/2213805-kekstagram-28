import {openBigPicture} from './full-Photos.js';
import { getData } from './api.js';
import {initiateFilter} from './filters.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const ERROR_TIMEOUT = 10000;
const ERROR_TEXT = 'Произошла ошибка загрузки';
//нашли фото
const similarListTemplate = document.querySelector('#picture').content.querySelector('.picture');
//нашли список фото
const picturesList = document.querySelector('.pictures');

const createPost = (data) => {
  //клонируем
  const post = similarListTemplate.cloneNode(true);
  //находим в разметке картинку
  const pictureImg = post.querySelector('.picture__img');
  //меняем у него путь и описание
  pictureImg.src = data.url;
  pictureImg.alt = data.description;
  //заполняем из data
  post.querySelector('.picture__comments').textContent = data.comments.length;
  post.querySelector('.picture__likes').textContent = data.likes;
  //вешаем обработчик и по клику открываем пост
  post.addEventListener('click', () => {
    openBigPicture(data);
  });
  return post;
};
//перебираем массив, на каждой итерации передаем в функцию, которая создает пост,вставляем объект в picturesList
const renderPosts = (data) => {
  data.forEach((item) => picturesList.append(createPost(item)));
};

function onGetSuccess(data) {
  renderPosts(data);
  initiateFilter(data);
}

function onGetFail() {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '0';
  errorBlock.style.left = '0';
  errorBlock.style.height = '60px';
  errorBlock.style.width = '100%';
  errorBlock.style.color = 'yellow';
  errorBlock.style.backgroundColor = 'blue';
  errorBlock.style.textAlign = 'center';
  errorBlock.textContent = ERROR_TEXT;
  errorBlock.style.padding = '20px';
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
}

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);

export {getPicturesData, renderPosts};
