// const  person = { 
//     name: 'John Doe',
//     age: 30
// }
// ******************************************************* //


// // Module Wrapper Function
// (function (exports, require, module, __filenamw, __dirname) {

// })


// // __dirname, __filename
// console.log(__dirname, __filename);

// // __dirname => /Users/andrew/Desktop/Node/NodeJS
// // __filename => /Users/andrew/Desktop/Node/NodeJS/person.js




class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}




module.exports = Person;


