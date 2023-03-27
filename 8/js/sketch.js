import {createPosts} from './data.js';
import {openBigPicture} from './full-Photos.js';

//нашли фото
const similarListTemplate = document.querySelector('#picture').content.querySelector('.picture');
//нашли список фото
const picturesList = document.querySelector('.pictures');
//создаем элемент (массив объектов)
const picturesData = createPosts();

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
const renderPosts = () => {
  picturesData.forEach((item) => picturesList.append(createPost(item)));
};

export {renderPosts};
