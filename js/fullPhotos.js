import './sketch.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onBigPictureCloseClick = (evt) => {
  evt.preventDefault();
  closeBigPicture();
};

const fillBigPicture = (post) => {
  bigPicture.querySelector('img').src = post.url;
  bigPicture.querySelector('.social__likes .likes-count').textContent = post.likes;
  bigPicture.querySelector('.social__comment-count .comments-count').textContent = post.comments.length;
  bigPicture.querySelector('.social__caption').textContent = post.description;
};

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
};

const openBigPicture = (post) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  fillBigPicture(post);
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
};

export {openBigPicture};

// document.addEventListener('keydown', (evt) => {
//   if(evt.key === 'Escape') {
//     evt.preventDefault();
//     fullPost.classList.add('hidden');
//   }
// });

// const closebigPicture = () => {
//   bigPicture.classList.add('hidden');
//   document.removeEventListener('keydown'. onDocumentKeydown);
//   loadCommentsButton.removeEventListener('click', () => {
//     loadComments();
//   });
// };

// closebigPicture.addEventListener('click', () => {
//   closebigPicture();
//   document.body.classList.remove('modal-open');
//   loadCommentsButton.classList.remove('hidden');
// });

// picture.map((element) =>
//   element.addEventListener('click', (evt) => {
//     const target = evt.target;
//     bigPicture.classList.remove('hidden');

//     bigPictureImg.querySelector('img').src = target.src;
//     bigPictureImg.querySelector('img').src = target.dataset.likes;
//     bigPictureImg.querySelector('img').src = target.dataset.commentscount;
//     bigPictureDescription.querySelector('img');
//     console.log(target.dataset.likes);
//     console.log(target.dataset.commentscount);
//   }));

// const clickOnPhoto = (evt) => {
//   if(evt.target.closest('.picture')) {
//     evt.preventDefault();
//     bigPicture.classList.remove('hidden');
//     bigPictureImg.src = evt.target.src;
//   };
// };
