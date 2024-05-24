console.log("   1zad");
let str = 'hdfgv';
console.log(str[0]); 
console.log(str[1]);
console.log(str[4]); 

console.log("   2zad");
let secondsInHour = 60 * 60;
console.log(secondsInHour);

console.log("   3zad");
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);

console.log("   4zad");
num = 3;
alert(num);

console.log("   5zad");
let a = 10;
let b = 2;
console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 

console.log("   6zad");
let c = 15;
let d = 2;
let result = c + d;
console.log(result);

console.log("   7zad");
a = 10;
b = 2;
c = 5;
console.log(a + b + c); 

console.log("   8zad");
a = 17;
b = 10;
c = a - b;
d = 7;
result = c + d;
console.log(result);

console.log("   9zad");
secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30; 
console.log(secondsInHour, secondsInDay, secondsInMonth);

console.log("   10zad");
let currentDate = new Date();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();
console.log(`${hour}:${minute}:${second}`);

console.log("   11zad");
let number = 5;
let square = number ** 2;
console.log(square);

console.log("   12zad");
let sum = [1, 2, 3, 4, 5].reduce((acc, val) => val % 2 === 0 ? acc + Math.sqrt(val) : acc, 0);
console.log(sum);

console.log("   13zad");
let applePrice = 1.15;
let orangePrice = 2.30;
let totalPrice = applePrice + orangePrice;
console.log(totalPrice);

console.log("   14zad");
let x = 5;
alert(x++); // Выведет 5

console.log("   15zad");
console.log([] + false - null + true); // Вернет NaN

console.log("   16zad");
let y = 1;
x = y = 2;
console.log(x); 

console.log("   17zad");
console.log([] + 1 + 2); 

console.log("   18zad");
let a6 = 5 % 3; 
let a7 = 3 % 5; 
let a8 = 5 + '3'; 
let a9 = '5' - 3; 
let a10 = 75 + 'кг'; 
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);

console.log("   19zad");
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

console.log("   20zad");
let heightC = 10;
let dC = 4;
let r = dC / 2;
let v = Math.PI * r * r * heightC;
console.log(v);

console.log("   21zad");
let S = 2000000;
let p = 0.1;
let years = 5;
let perepl = S * p * years;
console.log(perepl);

console.log("   22zad");
str = 'Привет';
num = 123;
let flag = true;
let txt = 'true';
console.log(typeof str); 
console.log(typeof num); 
console.log(typeof flag); 

console.log("   23zad");
function oppositeNumber(number) {
    return -number;
}
console.log(oppositeNumber(78)); 