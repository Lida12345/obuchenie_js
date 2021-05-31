"use strict";
/* урок16 */
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);


/*console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function calc(a, b) {
    return (a + b);
}*/



function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();


const calc = (a, b) => {
    console.log ('1');
    return a + b;
};

/* урок 17 */

const str = "teSt";

//console.log(str[2] = 'd');

//console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello world";

//console.log(logg.slice(6, 11));

//console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
//console.log(parseInt(test));
console.log(parseFloat(test));














