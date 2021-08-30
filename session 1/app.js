// Creating a variable

/* var, let, const */

// var {variable name} = {value};

// var
var x = 1;
console.log(x);

// x = 9;
console.log(x);

var a = 'hello';
console.log(a);

a = 'hello John';
console.log(a);

// let
let b = 12;
console.log(b);

// const
const c = 14;
console.log(c);

// Data types

// Primitive

// Number
var number = 1;

// String
var sentence = 'hello world';
console.log(sentence);

// Boolean
var x = true;
console.log(x);

// Null
var c = null;
console.log(c);

// Undefined
var a = undefined;
console.log(a);

// Reference

// Array
var list = [1, 5, 7, 8, 5];
console.log(list);
console.log(list[2]);

// Object Literals
// Functions
// Anything else

// typeof

console.log(typeof 860);
console.log(typeof 'Hello world');
console.log(typeof true);
console.log(typeof undefined);

console.log(typeof [1, 2, 3, 4, 5]);

// Type conversioon

// Number --> String
var number = 800;
console.log(number);

number = number.toString();
console.log(number);

// String --> number
var number_string = '900';
console.log(number_string);

number_string = Number(number_string); // --> number
console.log(number_string);
