console.log("       1zad");

function findDivisibleNumbers(arr, divisor) {
    return arr.filter(num => num % divisor === 0);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 76];
const divisor = 3;
console.log(findDivisibleNumbers(numbers, divisor)); 

console.log("       2zad");

function areAnagrams(str1, str2) {
    const sanitizeString = function(str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }

    return sanitizeString(str1) === sanitizeString(str2);
}
const str1 = "Astronomer ";
const str2 = "moon starer ";
console.log(areAnagrams(str1, str2)); 

console.log("       3zad");

function countVowels(str) {
    const vowels = /[aeiou]/gi;
    const matches = str.match(vowels);
    return matches ? matches.length : 0;
}
const sentence = "aliluia";
console.log(countVowels(sentence)); 

console.log("       4zad");

function printTriangle(height) {
    for (let i = 1; i <= height; i++) {
        console.log("#".repeat(i));
    }
}
const triangleHeight = 8;
printTriangle(triangleHeight);

console.log("       5zad");

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

console.log("       6zad");
function createChessboard(size) {
    let chessboard = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                chessboard += " ";
            } else {
                chessboard += "#";
            }
        }
        chessboard += "\n";
    }
    return chessboard;
}
const size = 8;
console.log(createChessboard(size));

console.log("       7zad");
function min(a, b) {
    return a < b ? a : b;
}
console.log(min(8, 67)); 

console.log("       8zad");
function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
}
console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false

console.log("       9zad");
function countBs(str) {
    return countChar(str, 'B');
}
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

const testString = "BBBBBBBBBF";
console.log(countBs(testString)); 
console.log(countChar(testString, 'F')); 

console.log("       10zad");
function range(start, end, step = 1) {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
console.log(sum(range(1, 10)));      
console.log(range(1, 10, 2));        
console.log(range(5, 2, -1));        

console.log("       11zad");
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(array);    
console.log(reverseArray(array));            
console.log(reverseArrayInPlace(array));     

console.log("       12zad");
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 != 'object' || typeof obj2 != 'object' || obj1 == null || obj2 == null) return false;

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}
let obj1 = {a: 1, b: {c: 2}};
let obj2 = {a: 1, b: {c: 2}};
let obj3 = {a: 13, b: {c: 14}};
console.log(deepEqual(obj1, obj2));   
console.log(deepEqual(obj1, obj3));     

console.log("       13zad");
let arrays = [[1, 2, 3], [4, 5], [6], [5,4,3,2,1]];
let flattened = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened);   