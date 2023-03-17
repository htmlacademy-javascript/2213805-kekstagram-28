import './sketch.js';

const bigPicture = document.querySelector('.big-picture');
// const bigPictureImg = document.querySelector('.big-picture__img img');
// const bigPicturePreview = bigPicture.querySelector('.big-picture__preview');
const picture = [...document.querySelectorAll('.picture__img')];
// const bigPictureLikes = bigPicture.querySelector('.likes-count');
// const bigPictureComments = bigPicture.querySelector('.comments-count');
// const bigPictureDescription = bigPicturePreview.querySelector('.social__caption');

const openBigPicture = (fullPost) => (post) => {
  console.log(post.likes);
  fullPost.classList.remove('hidden');
  fullPost.querySelector('img').src = post.url;
  fullPost.querySelector('.social__likes .likes-count').textContent = post.likes;
  fullPost.querySelector('.social__comment-count .comments-count').textContent = post.comments.length;
  fullPost.querySelector('.social__caption').textContent = post.description;

  document.addEventListener('keydown', (evt) => {
    if(evt.key === 'Escape') {
      evt.preventDefault();
      fullPost.classList.add('hidden');
    }
  });
};

export default openBigPicture(bigPicture);

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
