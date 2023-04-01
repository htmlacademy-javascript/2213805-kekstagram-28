const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgSetup = document.querySelector('.img-upload__input');

const loadImg = (evt) => {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if(matches) {
    //ссылка на содержимое
    imgSetup.src = URL.createObjectURL(file);
  }
};

export {loadImg};
