// Daniella Yao Homework 4 Javascript

// 1. What is javascript? How does an interpreted programming language differ from a compiled language? 
// JavaScript is a lightweight programming language commonly used by web developers to add more dynamic interactions to web pages, applications, servers,
// and even games. Interpreted language is a programming language that is s executed line-by-line by an interpreter at runtime, while a compiled language is 
// first translated into machine code before execution, typically resulting in faster execution but requiring a separate compilation step before running the code.


// 2. What is the difference between var, let, and const when declaring variables?
// Var declares a variable globally or locally to an entire function, and it allows redeclaration and reassignment.
// Let declares a block-scoped local variable and allows reassignment but not redeclaration within the same scope.
// Const declares a block-scoped local variable that cannot be reassigned after declaration, but the value it holds can still be mutable (if it's an object or array, for example).

// 3. What are anonymous functions? Higher order functions?
// Anonymous functions are functions that are declared without a name. They are used as arguments to other functions or within an expression where the functions 
// does not need to be named. Higher order functions are functions that can take other functions as arguments or return functions as results. 

// 4. Define objects in JavaScript and how they are different from objects in more traditional OOP languages.
// Objects in JavaScript are non-primitive data types that represent collections of properties. A property in an object is an association between a name (key) 
// and a value. A property's value can be a function, in which case the property is known as a method. Some ways they differ from objects in more traditional OOP 
// languages include: dynamic typing, flexible properties (objects can have properties added, modified, or deleted at runtime), and etc. 


const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

const result = [];

cats.forEach(cat => {
    if (cat.adoptionStatus === 'available') {
        result.push(cat.name);
    }
});

const newSentence = `Yay! I adopted ${result.join(', ')}!`;

console.log(newSentence);

