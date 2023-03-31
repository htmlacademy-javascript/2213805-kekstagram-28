const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i+1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {shuffleArray, debounce};

// function throttle (callback, delayBetweenFrames) {
//   let lastTime = 0;
//   return (...rest) => {
//     const now = new Date();
//     if (now - lastTime >= delayBetweenFrames) {
//       callback.apply(this, rest);
//       lastTime = now;
//     }
//   };
// }
