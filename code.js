// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name = 'World') {
    if (name === null ||
        name === '' ||
        typeof name === 'function' ||
        typeof name === 'object') {
        name = "World";
    }
    return `Hello, ${name}!`; // will work for any input
}

function isFive(num) {
    if (typeof num === 'string') {
        if (num === '5') {
            return true;
        }
    }
    return !!(num == 5);
}

console.log(isFive(5));
console.log(isFive("5"));
console.log(isFive(null));

function isEven(num) {
    if (typeof num === 'boolean') {
        return false;
    }
    return (num % 2 === 0);
}

console.log(isEven(2));
console.log(isEven(2));
console.log(isEven(2));
console.log(isEven(2));
console.log(isEven(2));
console.log(isEven(2));
console.log(isEven(2));
console.log(isEven(2));

function isVowel(letter) {
    if (typeof letter === 'undefined') {
        return false;
    }
    if (letter === null) {
        return false;
    }
    if (letter === '') {
        return false;
    }
    if (letter.length>1) {
        return false;
    }
    if (typeof letter === 'boolean') {
        return false;
    }
    return ['a', 'e', 'i', 'o', 'u'].includes(`${letter}`.toLowerCase());
}

// @todo - add in test code to tests.js

console.log(isVowel);
console.log(isVowel("a"));
console.log(isVowel("A"));
console.log(isVowel("y"));
console.log(isVowel(4));
console.log(isVowel(true));
console.log(isVowel(false));
console.log(isVowel("banana"));
console.log(isVowel());

// @todo - add in test code to tests.js

function add(num1,num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return Number(num1 + num2);
}

console.log(add(2,3));
console.log(add(-3,-9));
console.log(add("5",6));
console.log(add("-4","10"));
console.log(add("banana","split"));
console.log(add(2,"apples"));
console.log(add());



