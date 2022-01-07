// var x = 101;
// console.log(typeof x);      // ?

// x = "Some string";
// console.log(typeof x);      // ?

// x = true;
// console.log(typeof x)           // boolean

// ES6 features
// Arrow function (args_list) => body
// - Anonymous
// - Two flavour (With Curly braces; Without Curly braces)
// - 'arguments' keyword not available
// - Can't call arrow function with 'new' operator
// - Don't have 'this' reference

// var add = (num1, num2) => num1 + num2;

// var addition = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addition(3,2))

// var doubleMe = value => value * 2;

// console.log(doubleMe(4))






// Destructuring - "unpacking" the collection - Array | Object

// var friends = ["Foo", "Bar", "Bam"];

// var [f1,f2,f3] = friends;

// friends[1] = "Baz";

// console.log(friends);       // ["Foo", "Bar", "Bam"]

// console.log(f2);        // ?

// console.log(friends[1])

// var user = {
//     email : "test@test.com",
//     age : 32
// }

// var {age, email} = user;

// age = 38;

// console.log(user)

// var me = {
//   firstName: "John",
//   lastName: "Doe",
//   address: {
//     city: "Bengaluru",
//     street: "201 Main Road, Marathahalli",
//   },
//   fruits: ["apple", "oranges", "papaya"],
// };

// var {
//   firstName,
//   lastName,
//   address: { city, street },
//   fruits: [fruit1, fruit2, fruit3],
// } = me;

// var users = [
//   { name: "Jenny", age: 28 },
//   { name: "James", age: 29 },
//   { name: "Johny", age: 30 },
// ];

// var [
//     { name: n1, age: a1 }, 
//     { name: n2, age: a2 }, 
//     { name: n3, age: a3 }
// ] = users;

// console.log(n2);




// Block scope variable : restrict the scope of variable to the nearest curly brace.
// - let : other types
// - const : for creating constants

// JavaScript Engine
// - Creational Phase : allocates memory to all variables and functions
// - Execution Phase : executes programs

// let demo = (arr) => {
//   if(arr.length > 2){
//     let LOAD = "LOADING"
//     console.log(FLASH);     // undefined | error | "FLASHING"
//   }else{
//     let FLASH = "FLASHING"
//   }
// }

// demo([1,2,3,4])


// const USERNAME = "Foo";

// const user = {
//   name  : "Foo"
// }

// user.name = "Bar";

// console.log(user);      // ?

// user = {
//   name : "Baz"
// }





// Rest / Spread Operator : (...)
// - Rest : creates the collection from individual elements / items;
  // Always present in function argument list
  // Rest operator must be last argument in parameter list
// - Spread : splits the collection into individual elements / items
  // Always present with collection

// const display = ( email, age, ...args) => {
//   console.log(args[0])      // ?
// }

// // display("test@test.com")
// // display("test@test.com", 32)
// display("test@test.com", 32, true)


let numbers = [3,4,5];

let newNumbers = [1,2, ...numbers,6,7,8];

console.log(newNumbers);      // [ 1,2, [3,4,5], 6,7,8, ]


let userOne = {
  email : "test@test.com",
  age : 32
}

let userTwo = {
  ...userOne,
  address : "201 Main Road"
}

console.log(userTwo);