const loadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const onFormClose = document.querySelector('#upload-cancel');
const scaleUp = document.querySelector('.scale__control--bigger');
const scaleDown = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
// const effectRadio = document.querySelector('.img-upload__preview img');
// const effectOriginal = document.querySelector('.effects__preview--none');
// const effectChrome = document.querySelector('.effects__preview--chrome');
// const effectSepia = document.querySelector('.effects__preview--sepia');
// const effectMarvin = document.querySelector('.effects__preview--marvin');
// const effectPhobos = document.querySelector('.effects__preview--phobos');
// const effectHeat = document.querySelector('.effects__preview--heat');


// const pristine = new Pristine(loadForm, {
// });

const uploadFile = document.querySelector('#upload-file');

//Закрытие формы редактирования изображения
const onDocumentKeydown = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
};

const closeForm = () => {
  document.body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  onFormClose.removeEventListener('click', onFormCloseClick);
};

//изменение масштаба изображения
const increasePhoto = () => {
  let val = +scaleValue.value.replace('%', '');
  if (val >= 100) {
    return;
  }
  val = val + 25;
  scaleValue.value = `${val}%`;
  uploadPreviewImage.style.transform =`scale(${val/100})`;
};

const decreasePhoto = () => {
  let val = +scaleValue.value.replace('%', '');
  if (val <= 25) {
    return;
  }
  val = val - 25;
  scaleValue.value = `${val}%`;
  uploadPreviewImage.style.transform =`scale(${val/100})`;
};

uploadFile.addEventListener('change', (evt) => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadPreviewImage.src = window.URL.createObjectURL(evt.target.files[0]);
  onFormClose.addEventListener('click', closeForm);
  scaleUp.addEventListener('click', increasePhoto);
  scaleDown.addEventListener('click', decreasePhoto);
});

//Наложение эффекта на изображение
// const createEffect = () => {
//   uploadPreviewImage.src = window.URL.createObjectURL(evt.target.files[0]);
//   uploadPreviewImage.classList.add('effects__preview--none');
// };


//Интенсивность эффекта
