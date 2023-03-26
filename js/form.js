const loadForm = document.querySelector('.img-upload__form');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const onFormClose = document.querySelector('#upload-cancel');
const scaleUp = document.querySelector('.scale__control--bigger');
const scaleDown = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');

new Pristine(loadForm);

const uploadFile = document.querySelector('#upload-file');

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

