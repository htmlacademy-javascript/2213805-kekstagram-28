const checkStringLength = (string, length) => String(string).length <= length;

const isPalindrome = (string) => {
  string = String(string).toLowerCase().replaceAll(' ','');
  return string === string.split('').reverse().join('');
};

const extractNumber = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

const createNewString = (string, minLength, pad) => {
  while (string.length < minLength) {
    string = pad.slice(0, minLength - string.length) + string;
  }
  return string;
};
