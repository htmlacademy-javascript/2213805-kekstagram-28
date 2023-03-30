import './sketch.js';

const COMMENTS_COUNTER = 5;
const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureLikesCounter = document.querySelector('.likes-count');
const bigPictureCommentsCounter = document.querySelector('.social__comment-count');
const commentsList = document.querySelector('.social__comments');
const bigPictureCaption = document.querySelector('.social__caption');
const bigPictureLoadButton = document.querySelector('.comments-loader');
const commentTemplate = document.querySelector('.social__comment');

let showingComments = 0;
let comments = [];

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

const fillCommentCounter = () => {
  bigPictureCommentsCounter.innerHTML = `${showingComments} из <span class="comments-count"> ${comments.length}</span> комментариев`;
};

const createComment = (comment) => {
  const newComment = commentTemplate.cloneNode(true);
  const img = newComment.querySelector('img');
  img.src = comment.avatar;
  img.alt = comment.message;
  newComment.querySelector('p').textContent = comment.message;
  return newComment;
};

const renderComments = () => {
  const currentComments = comments.slice(showingComments, showingComments + COMMENTS_COUNTER);
  showingComments += COMMENTS_COUNTER;
  showingComments = Math.min(showingComments, comments.length);
  currentComments.forEach((item) => commentsList.append(createComment(item)));
  fillCommentCounter();

  if (showingComments >= comments.length) {
    bigPictureLoadButton.classList.add('hidden');
    return;
  }
  bigPictureLoadButton.classList.remove('hidden');
};

const fillBigPicture = (post) => {
  bigPictureImg.src = post.url;
  bigPictureLikesCounter.textContent = post.likes;
  bigPictureCaption.textContent = post.description;
};

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);

  comments = [];
  showingComments = 0;
};

const onCommentsLoadClick = (evt) => {
  evt.preventDefault();
  renderComments();
};

const openBigPicture = (post) => {
  comments = post.comments;
  commentsList.innerHTML = '';
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  fillBigPicture(post);
  renderComments();
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  bigPictureLoadButton.addEventListener('click', onCommentsLoadClick);
};

export {openBigPicture};
