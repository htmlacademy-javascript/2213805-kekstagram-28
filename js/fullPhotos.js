import './sketch.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPicturePreview = bigPicture.querySelector('.big-picture__preview');
const picture = [...document.querySelectorAll('.picture__img')];
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.comments-count');
const bigPictureDescription = bigPicturePreview.querySelector('.social__caption');

picture.map((element) =>
  element.addEventListener('click', (evt) => {
    const target = evt.target;
    bigPicture.classList.remove('hidden');
    bigPictureImg.querySelector('img').src = target.src;
    bigPictureLikes.querySelector('.likes-count').src = target.dataset.likes;
    bigPictureComments.querySelector('img').src = target.dataset.commentscount;
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

