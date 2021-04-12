// 1. Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.
// Правила:
// -Яйца варить 5 минут
// -Вместительность емкости не более 5 яиц одновременно

function getCookingTime (eggsAmount) {
    var result;
    result = Math.ceil(eggsAmount / 5) * 5;

    console.log(result);
}
getCookingTime(0); //returns 0
getCookingTime(5); //returns 5
getCookingTime(9); //returns 10 (because capacity is 5 so we need to do it 2 times)


// 2. Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

function getNumber (array) {
    var result;
    var odd = [];
    var even = [];
    for (var i = 0; i < array.length; i++) {
        if(array[i] % 2 ===0) {
            even.push(array[i]);
        } else {
            odd.push(array[i]);
        }
    } 
    if (odd.length < even.length) {
        result = odd[0];
    } else {
        result = even[0];
    }

    console.log(result);
}
getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]) //returns 4
getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]) //returns 13


// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).
// function findTitle(array, string) {
//     return [{title has this substring}]
// }

function findTitle(arr, str) {
    str = str.toLowerCase();
    var result = [];
    for (var i = 0; i < arr.length; i++){
            if (arr[i].hasOwnProperty('title')) {
                if (arr[i].title.toLowerCase().includes(str)) {
                    result.push(arr[i]);
            }
        }
    }

    arr = result;
    return arr;
}

var arr = [{
    title: 'Some title1'
    }, {
    title: 'I like JS'
    }, {
    user: 'This obj doesn\’t have key title js'
    }, {
    title: 'Js - is the best!'
}];

console.log(findTitle(arr, 'js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]


// 4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке

function countCharacters(string) {
    str = string.split(' ').join('');
    var result = {};
    for (var i = 0; i < str.length; i++){
        if (result[str[i]] = result[str[i]]){
            result[str[i]] = result[str[i]] + 1;
        } else {
            result[str[i]] = 1;
        }
    }
    return result;
}

console.log(countCharacters('sparrow')); // return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters('aabcddeffge')); // return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters('a 2ab !d')); // return {a: 2, b:1, d:1, 2:1}


// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.
// Палиндром - это слово, фраза, число или другая последовательность символов, которая читается так же, как вперед и назад, например, «мадам».

function nextPalindrome(number){
    number = String(number);
    var j = Math.round(number.length / 2);
    for (var i = 0; i < j; i++){
      if (number[i] !== number[number.length - i - 1]) {
        return false;
      } 
    } 
    return true;
  }
  
  function getNextPalindrome(number) {
    while (true) {
        if (nextPalindrome(number) === true){
            return number;
        }
        number++;
    }
  }

console.log(getNextPalindrome(7));
console.log(getNextPalindrome(99));
console.log(getNextPalindrome(132));
console.log(getNextPalindrome(888));
console.log(getNextPalindrome(999));