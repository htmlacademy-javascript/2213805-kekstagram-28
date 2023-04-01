import {changeEffect, resetFilter, createSlider} from './effects.js';
import {activateScale, resetScale} from './scaling.js';
import {addValidator, resetPristine, validatePristine} from './form-validate.js';
import { sendData } from './api.js';
import {renderFailMessage, renderSuccessMessage} from './messages.js';
import {loadImg} from './setup-image.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram';
const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');
const overlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
const fileField = document.querySelector('#upload-file');
const effectsField = document.querySelector('.effects');

const onSendSuccess = () => {
  renderSuccessMessage();
  closeModal();
  submitButton.disabled = false;
};

const onSendFail = () => {
  renderFailMessage();
  submitButton.disabled = false;
};

const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape' && !evt.target.closest('.text__hashtags') &&
  !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

const onCancelButtonclick = () => closeModal();
const onFileInputChange = (evt) => {
  openModal();
  loadImg(evt);
};

const onEffectsFieldChange = (evt) => changeEffect(evt);

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (validatePristine()) {
    submitButton.disabled = true;
    sendData(GET_URL, onSendSuccess, onSendFail, new FormData(evt.target));
  }
};

function closeModal() {
  form.reset();
  resetScale();
  resetFilter();
  resetPristine();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const addFormAction = () => {
  fileField.addEventListener('change', onFileInputChange);
  cancelButton.addEventListener('click', onCancelButtonclick);
  effectsField.addEventListener('change', onEffectsFieldChange);
  form.addEventListener('submit', onFormSubmit);
  activateScale();
  addValidator();
  createSlider();
};

export {addFormAction};
