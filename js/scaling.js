const SCALE_STEP = 25;
const MIN_SCALE = '25%';
const MAX_SCALE = '100%';
const PERCENT_DIVIDER = 100;

const previewImage = document.querySelector('.img-upload__preview img');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');


const changeScale = (value) => {
  previewImage.style.transform = `scale(${+value.replace('%', '') / PERCENT_DIVIDER})`;
};

const onSmallerButtonclick = () => {
  if (scaleInput.value !== MIN_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') - SCALE_STEP}%`;
    changeScale(scaleInput.value);
  }
};

const onBiggerButtonclick = () => {
  if (scaleInput.value !== MAX_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') + SCALE_STEP}%`;
    changeScale(scaleInput.value);
  }
};

const activateScale = () => {
  scaleUpButton.addEventListener('click', onBiggerButtonclick);
  scaleDownButton.addEventListener('click', onSmallerButtonclick);
}

const resetScale = () => changeScale(scaleInput.value);

export {activateScale, resetScale};


//изменение масштаба изображения - мой первоначальный вариант - позже убрать
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
