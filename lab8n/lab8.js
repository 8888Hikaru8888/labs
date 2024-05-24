console.log("   1zad");
if( true ) {
    console.log("This statement is true");
}
  
if( false ) {
    console.log("This statement is false");
}
console.log("   2zad");
let ma = 60;
let n;
if(ma > 50) {
  n = "большое";
} else {
  n = "маленькое";
}
console.log(n);
console.log("   3zad");
var i = 2;
while( i < 9 ){
 	  console.log( i++ );
}
console.log("   4zad");
i = 45;
while(i <= 67) {
  console.log(i);
  i++;
}
console.log("   5zad");
i = 45;
while(i <= 670) {
  if(i % 10 === 0) {
    console.log(i);
  }
  i++;
}
console.log("   6zad");
for(let i = 45; i <= 670; i++) {
    if(i <= 67) {
      console.log(i);
    } else if(i % 10 === 0) {
      console.log(i);
    }
  }
  console.log("   7zad");
n = 5;
switch(n) {
  case 0:
    console.log("ноль");
    break;
  case 1:
    console.log("один");
    break;
  case 2:
    console.log("два");
    break;
  case 3:
    console.log("три");
    break;
  case 4:
    console.log("четыре");
    break;
  case 5:
    console.log("пять");
    break;
  case 6:
    console.log("шесть");
    break;
  case 7:
    console.log("семь");
    break;
  case 8:
    console.log("восемь");
    break;
  case 9:
    console.log("девять");
    break;
}
console.log("   8zad");
let img = "<img src='Без имени.jpg' alt='img' />";

for(let i = 0; i < 10; i++) {
  document.write(img);
}
console.log("   9zad");
let size = 120;
let unit = "Кб";

let bytes;
switch(unit) {
  case "Кб":
    bytes = size * 1024;
    break;
  case "Мб":
    bytes = size * 1024 * 1024;
    break;
  case "Гб":
    bytes = size * 1024 * 1024 * 1024;
    break;
}

console.log(bytes);
console.log("   10zad");

function createCalendar(elem, year, month) {
  let cur_date = new Date(year, month - 1, 1);      
  let fin_date = new Date(year, month, 0);          

  while ( cur_date.getDay() != 1 ) {                
      cur_date.setDate(cur_date.getDate() - 1);     
  }

  let table = document.createElement("table");     
  table.innerHTML = "<tr><th>пн</th><th>вт</th><th>ср</th>" +
                    "<th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>";

  while ( cur_date <= fin_date ) {                 
      let tr = document.createElement("tr");
      for (let i = 0; i < 7; i++) {                 
          let td = document.createElement("td");
          if ( cur_date.getMonth() == month - 1 ) { 
              td.textContent = cur_date.getDate(); 
          }
          tr.append(td);
          cur_date.setDate(cur_date.getDate() + 1); 
      }
      table.append(tr);
  }

  elem.append(table);     
}                         
createCalendar(calendar, 2024, 6);


console.log("   11zad");
function hello1() {
    return "Привет, JavaScript!";
  }
  console.log(hello1());
console.log("   12zad");
function hello2(name) {
    if(name) {
      return "Привет, " + name;
    } else {
      return "Привет, гость";
    }
  }
  
  console.log(hello2("Василий"));
  console.log(hello2());
  console.log("   13zad");
function mul(n, m) {
    return n * m;
  }
  
  console.log(mul(5, 10)); 
  console.log("   14zad");
function repeat(str, n = 2) {
    return str.repeat(n);
  }
  
  console.log(repeat("abc", 3)); 
  console.log("   15zad");
function rgb(r = 0, g = 0, b = 0) {
    return `rgb(${r},${g},${b})`;
  }
  
  console.log(rgb(23, 100, 134)); 
  console.log("   16zad");
function avg() {
    let sum = 0;
    let count = arguments.length;
    
    for(let i = 0; i < count; i++) {
      sum += arguments[i];
    }
    
    return sum / count;
  }
  
  console.log(avg(1, 2, 3, 4)); 
  console.log("   17zad");
function mul(n, m) {
    return n * m;
  }
  
  function m(a, b) {
    return mul(a, b);
  }
  
  function log(value) {
    console.log(value);
  }
  
  log(m(5, 10)); 
  console.log("   18zad");
function operation(m, n, o) {
    return o(m, n);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  console.log(operation(5, 10, add)); 
  console.log("   19zad");
function addN(n) {
    return function(x) {
      return n + x;
    };
  }
  
  let add5 = addN(5);
  console.log(add5(10)); 
  console.log("   20zad");
function words(n, d = 0) {
    if(n % 100 >= 11 && n % 100 <= 19) {
      return "товаров";
    }
  
    if(n % 10 === 1) {
      return "товар";
    } else if(n % 10 >= 2 && n % 10 <= 4) {
      return "товара";
    } else {
      return "товаров";
    }
  }
  
  console.log("12 " + words(12)); 
  console.log("22 " + words(22)); 
  
