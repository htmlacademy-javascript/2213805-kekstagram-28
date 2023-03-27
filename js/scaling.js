const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const scaleUp = document.querySelector('.scale__control--bigger');
const scaleDown = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value) => {
  uploadPreviewImage.style.transform =`scale(${val/100})`;
  scaleValue.value = `${value}%`;
};

const decreasePhoto = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const increasePhoto = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue < MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

scaleDown.addEventListener('click', decreasePhoto);
scaleUp.addEventListener('click', increasePhoto);

export {resetScale};






//изменение масштаба изображения - мой первоначальный вариант
// const increasePhoto = () => {
//   let val = +scaleValue.value.replace('%', '');
//   if (val >= 100) {
//     return;
//   }
//   val = val + 25;
//   scaleValue.value = `${val}%`;
//   uploadPreviewImage.style.transform =`scale(${val/100})`;
// };

// const decreasePhoto = () => {
//   let val = +scaleValue.value.replace('%', '');
//   if (val <= 25) {
//     return;
//   }
//   val = val - 25;
//   scaleValue.value = `${val}%`;
//   uploadPreviewImage.style.transform =`scale(${val/100})`;
// };

// uploadFile.addEventListener('change', (evt) => {
//   uploadOverlay.classList.remove('hidden');
//   body.classList.add('modal-open');
//   uploadPreviewImage.src = window.URL.createObjectURL(evt.target.files[0]);
//   onFormClose.addEventListener('click', closeForm);
//   scaleUp.addEventListener('click', increasePhoto);
//   scaleDown.addEventListener('click', decreasePhoto);
// });
