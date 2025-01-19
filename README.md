# es6
ES6 essentials  

In this section we are going to cover essential js features that we are going to use in react applications, such as: 

Let/Const
Objects 
this 
Arrow functions 
Object Destructuring 
Spread 
Classes
Modules









ES6 Cheat Sheet

1. Let and Const
Let: Block-scoped variable declaration.
Const: Block-scoped, read-only constant declaration.

let name = "John";
const age = 30;









2. Arrow Functions
Shorter syntax for function expressions.
Lexically binds this.

const add = (a, b) => a + b;









3. Template Literals
Multi-line strings and string interpolation.

const greeting = `Hello, ${name}`;









4. Destructuring Assignment
Unpack values from arrays or properties from objects into distinct variables.

const person = { name: "John", age: 30 };
const { name, age } = person;

const numbers = [1, 2, 3];
const [one, two, three] = numbers;









5. Default Parameters
Default values for function parameters.

function multiply(a, b = 1) {
    return a * b;
}









6. Spread Operator
Expands an iterable (like an array) into more elements.

const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];









7. Rest Parameters
Represents an indefinite number of arguments as an array.

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}









8. Modules
Import and export functionalities between files.

// Exporting
export const pi = 3.14;

// Importing
import { pi } from './math.js';









9. Classes
Syntactical sugar over JavaScript's existing prototype-based inheritance.

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}









10. Promises
Represents the eventual completion (or failure) of an asynchronous operation.

const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Asynchronous code
    });
};









11. Iterators and Generators
Iterators: Objects that allow iteration over a collection.
Generators: Functions that can be exited and later re-entered.

function* generator() {
    yield 1;
    yield 2;
}

const gen = generator();
console.log(gen.next()); // { value: 1, done: false }









12. Map and Set
Map: Collection of key-value pairs.
Set: Collection of unique values.

const map = new Map();
map.set('key', 'value');

const set = new Set([1, 2, 2, 3]);








Conclusion
This cheat sheet covers the essentials of ES6, providing a quick reference for developers. 

This cheat sheet has been created by Blessing Baloyi with the help of: https://youtu.be/NCwa_xi0Uuc?si=knAHyTscYUg1pSaU and ZebraGPT



