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

const onSmallerButtonClick = () => {
  if (scaleInput.value !== MIN_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') - SCALE_STEP}%`;
    changeScale(scaleInput.value);
  }
};

const onBiggerButtonClick = () => {
  if (scaleInput.value !== MAX_SCALE) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') + SCALE_STEP}%`;
    changeScale(scaleInput.value);
  }
};

function activateScale() {
  scaleUpButton.addEventListener('click', onBiggerButtonClick);
  scaleDownButton.addEventListener('click', onSmallerButtonClick);
}

const resetScale = () => changeScale(scaleInput.value);

export {activateScale, resetScale};
