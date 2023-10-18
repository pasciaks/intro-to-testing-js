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