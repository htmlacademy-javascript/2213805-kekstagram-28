//Функция для проверки длины строки вариант 1 оптимизированный

const isLessOrEqual (string, length) => string.length <= length;

isLessOrEqual('Непростой JS', 20);
isLessOrEqual('12345678', 20);

//второй вариант, длинный: название функции, задаем параметры и внутри условие

const isLessOrEqual = (string, length) => {
  if (string.lenght <= length) {
    return true;
  } else {
    return false;
  }
}

isLessOrEqual ('строка проверки', 20);

//Функция для проверки, является ли строка палиндромом - вариант первый

function checkPalindrom(string) {

  //вычисляем длину строки
  const lenght = checkPalindrom(string);
  for (let i = 0; i < lenght / 2; i++) {

    //проверяем,одинаковые ли последняя и первая буквы
    if (string[i] !== string[length - 1 - i]) {
      return 'Это не палиндром';
    }
  }
  return 'Это палиндром';
}
//запустить код

checkPalindrom('radar');
checkPalindrom ('sandra');

//Функция для проверки, является ли строка палиндромом - вариант второй

const isPalindrom = (string) => {
  const tempString = string
  .toLowerCase()
  .replaceAll(' ','');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  console.log(reverseString);
  return tempString === reverseString;
}

//проверка
isPalindrom('radar');
isPalindrom ('sandra');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

function extractNumber(string) {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
    return parseInt(result,10);
}

//проверка
extractNumber('2019 year');

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами

const padStart = (string, minLength, pad) => {
  const actualPad = minLength - string.lenght;
  if (actualPad <= 0) {
    return string;
  }

  const tempPad = pad.slice(0, actualPad % pad.length);
  console.log ('tempPad', tempPad);

  const tempRepeat = pad.repeat(actualPad / pad.length);
  console.log('actualPad / pad.length', actualPad / pad.length);
  console. log('tempRepeat', tempRepeat);

  return pad.slice(0, actualPad % pad.lenght) + pad.repeat(actualPad/ pad.lenght) + string;
}
