console.log('Hello World');

let test = 'Hello World';
console.log(test);

let firstName = 'Paolo';
let lastName = 'Torres';
console.log(firstName, lastName);

let interestRate1 = 0.3;
interestRate1 = 0.6;
const interestRate2 = 0.3;
console.log(interestRate1, interestRate2);

let name = 'Paolo Torres'; // string literal
let age = 22; // number literal
let b = true; // boolean literal
let u = undefined;
let n = null;
console.log(name, age, b, u, n);

console.log(typeof name);
name = 1;
console.log(typeof name);
console.log(typeof age);
age = 22.5;
console.log(typeof age);
console.log(typeof b, typeof u, typeof n);

let person = {
    name: 'Alpha',
    age: 22
};
console.log(person);
person.name = 'Beta'; // dot notation
console.log(person.name);
let selection = 'name';
person[selection] = 'Charlie'; // bracket notation
console.log(person.name);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(typeof selectedColors);
console.log(selectedColors.length);

function greet(param1, param2) {
    console.log('Hello ' + param1 + ' ' + param2);
}
greet('firstName1', 'lastName1');
greet('firstName2', 'lastName2');

function square(number) {
    return number * number;
}
console.log(square(2));
