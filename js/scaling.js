const uploadPreviewImage = document.querySelector('.img-upload__preview img');
const onFormClose = document.querySelector('#upload-cancel');
const scaleUp = document.querySelector('.scale__control--bigger');
const scaleDown = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;




export {resetScale};

//изменение масштаба изображения мой первоначальный вариант
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
