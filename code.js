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

