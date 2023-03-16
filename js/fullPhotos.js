import './sketch.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const picture = [...document.querySelectorAll('.picture__img')];

picture.map((element) =>
  element.addEventListener('click', (evt) => {
    const target = evt.target;
    bigPicture.classList.remove('hidden');
    bigPictureImg.querySelector('img').src = target.src;
    bigPictureImg.querySelector('img').src = target.dataset.likes;
    bigPictureImg.querySelector('img').src = target.dataset.commentscount;
    console.log(target.dataset.likes);
    console.log(target.dataset.commentscount);
  }));

const closebigPicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown'. onDocumentKeydown);
  loadCommentsButton.removeEventListener('click', () => {
    loadComments();
  });
};

closebigPicture.addEventListener('click', () => {
  closebigPicture();
  document.body.classList.remove('modal-open');
  loadCommentsButton.classList.remove('hidden');
});

