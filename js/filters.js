import {renderPosts} from './sketch.js';
import {shuffleArray, debounce} from './util.js';

const RANDOM_COMMENTS_COUNT = 10;
const REDO_DELAY = 500;

const imgFilters = document.querySelector('.img-filters');

const removeElements = (elements) => {
  elements.forEach((element) => element.remove());
};

const redoPosts = (data, id) => {
  const dataCopy = data.slice();
  let sortArray = dataCopy;
  removeElements(document.querySelectorAll('.picture'));
  if (id === 'filter-discussed') {
    sortArray = dataCopy.sort((a,b) => a.comments.length - b.comments.length);
  }
  if (id === 'filter-random') {
    sortArray = shuffleArray(dataCopy).slice(0, RANDOM_COMMENTS_COUNT);
  }
  renderPosts(sortArray);
};

//вызываем функия с 2 аргументами(коллбэк и тайм-аут)
const redoTimeout = debounce((data, id) => redoPosts(data, id), REDO_DELAY);

const onImageFiltersClick = (evt, data) => {
  if (evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('.img-filters__button--active');
    const id = evt.target.id;
    redoTimeout(data, id);
  }
};

const initiateFilter = (data) => {
  imgFilters.classList.remove('img-filters--inactive');
  imgFilters.addEventListener('click', (evt) => {
    onImageFiltersClick(evt, data);
  });
};

export {initiateFilter};
