const checkStringLength = (string, length) => String(string).length <= length;

console.log(checkStringLength('Непростой JS', 20));
console.log(checkStringLength('12345678', 20));


const isPalindrome = (string) => {
  string = String(string).toLowerCase().replaceAll(' ','');
  return string === string.split('').reverse().join('');
};

console.log(isPalindrome('radar'));
console.log(isPalindrome('Лёша на полке клопа нашёл'));


const extractNumber = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

console.log(extractNumber('2019 year'));

const createNewString = (string, minLength, pad) => {
  while (string.length < minLength) {
    string = pad.slice(0, minLength - string.length) + string;
  }
  return string;
};

console.log(createNewString('7', 10, 'timepad'));
