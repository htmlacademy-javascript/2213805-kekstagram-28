import './sketch.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');
//добавляем обработчик событий
const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    //вынесли в функцию, чтобы обрабатывать по крестику
    closeBigPicture();
  }
};

//создаем обработчик закрывающий по клику
const onBigPictureCloseClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

//добавляю обработчик на загрузку комментариев

const renderComments = (post, from, to) => {
  // console.log(post.comments.length, from, to);
  const commentsDiv = bigPicture.querySelector('.social__comments');
//создаю цикл от и до комментариев
  for(let i = from; i <= to; i++) {
    if (i >= post.comments.length) {
      return;
    }
    //создаем элементы для добавления в html (li = comment)
    const li = document.createElement('li');
    li.classList.add('social__comment');
    const img = document.createElement('img');
    img.src = post.comments[i].avatar;
    img.alt = post.comments[i].name;
    img.width = 35;
    img.height = 35;
    img.classList.add('social__picture');
    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = post.comments[i].message;
    //в элемент добавляем картинку и текст
    li.append(img);
    li.append(p);
    //вставляем li в список комментариев
    commentsDiv.append(li);
  };
};

const fillBigPicture = (post) => {
  bigPicture.querySelector('img').src = post.url;
  bigPicture.querySelector('.social__likes .likes-count').textContent = post.likes;
  bigPicture.querySelector('.social__comment-count .comments-count').textContent = post.comments.length;
  bigPicture.querySelector('.social__caption').textContent = post.description;
};

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  //при закрытии добавляем класс hidden
  bigPicture.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  //удаляем обработчик закрытия
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
};
//переменная количества загруженных комментариев
let NUM_OF_COMMENTS = 0;
//обработчик, который забирает значение поста и возвращает 5 комментариев
const onCommentsLoadClick = (post) => (evt) => {
  renderComments(post, NUM_OF_COMMENTS, NUM_OF_COMMENTS + 5);
  NUM_OF_COMMENTS += 5;
};

const openBigPicture = (post) => {
  NUM_OF_COMMENTS = 0;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  //после открытия окна добавляем body класс modal-open
  document.body.classList.add('modal-open');
  //при открытии убираем класс hidden
  bigPicture.classList.remove('hidden');
  fillBigPicture(post);
  //вешаем обработчик при открытии
  document.addEventListener('keydown', onDocumentKeydown);
  //добавляем обработчик закрытия
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);

  bigPicture.querySelector('.social__comments').innerHTML = '';

  //при открытии рендерим первые 5 комментариев
  renderComments(post, NUM_OF_COMMENTS, NUM_OF_COMMENTS + 4);
  NUM_OF_COMMENTS += 5;

  //удаляем класс
  bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigPicture.querySelector('.comments-loader').classList.remove('hidden');

  bigPicture.querySelector('.comments-loader').addEventListener('click', onCommentsLoadClick(post));
};

export {openBigPicture};
