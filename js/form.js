import { reset } from "browser-sync";

const loadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const onFormClose = document.querySelector('#upload-cancel');
const fileUpload = document.querySelector('#upload-file');
const formSubmit = document.querySelector('#submit');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');


const pristine = new Pristine(loadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

//Закрытие формы редактирования изображения
const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
};

const showForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  loadForm.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  onFormClose.removeEventListener('click', onFormCloseClick);
};

//хэштеги валидатор
let MAX_HASHTAG_COUNT = 5;

const isValidtag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidtag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

fileUpload.addEventListener('change', onFileInputChange);
onFormClose.addEventListener('click', closeForm);
loadForm.addEventListener('submit', formSubmit);
