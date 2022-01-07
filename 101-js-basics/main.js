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
//   for(let arg of args){
//     if(typeof arg == "object"){
//       console.log(arg.length)
//     }
//   }
// }

// // display("test@test.com")
// // display("test@test.com", 32)
// display("test@test.com", 32, true, [1,2,3,4])


// let numbers = [3,4,5];

// let newNumbers = [1,2, ...numbers,6,7,8];

// console.log(newNumbers);      // [ 1,2, [3,4,5], 6,7,8, ]


// let userOne = {
//   email : "test@test.com",
//   age : 32
// }

// let userTwo = {
//   ...userOne,
//   address : "201 Main Road"
// }

// console.log(userTwo);




// Template Literals - " " | ' ' | ` ` (back tick)
// - Write variables within string without ( + )
// - Write multiline string without ( \n )

// let username = "Foo";
// let age = 32;

// let str = `Hello from ${username},
// I'm ${age} years old!
// `

// console.log(str);




// Class

// class Person{
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getDetails = () => `Full Name : ${this.firstName} ${this.lastName}`;
//   eats = () => `${this.firstName} eats when he is hungry`
// }

// class Student extends Person{
//   static studId = "ST000";
//   constructor(firstName, lastName){
//     super(firstName, lastName);
//     // this.studId = studId;
//   }
//   getDetails = () => `Full Name : ${Student.studId} - ${this.firstName} ${this.lastName}`;
//   eats = () => `${this.firstName} eats in class as well`
// }

// let foo = new Student("Foo", "Bar", );
// let baz = new Student("Baz", "Bam");
// console.log(foo.getDetails())
// console.log(baz.getDetails())
// console.log(foo.eats())

// Contructor Function
// function Person (email , age){
//   this.email = email;
//   this.age = age;
// }

// let foo = new Person("foo@test.com", 32)
// let bar = new Person("bar@test.com", 34)



// Module System - "CommonJS" | ES6 Module System
// require() : import the functionality from Modules
// module.exports Keyword : :export the functionality

// const maths = require("./maths")

// console.log(maths.sum(2,4));

// const {mul, sum, div} = require("./maths")

// console.log("Multification : ", mul(2,4))

// const myForture = require("./fortune");

// console.log("My Lucky Number today : ", myForture())



// Map & Set

// const map = new Map()

// map.set("name", "John")
// map.set("age", 32)
// map.set(101, true)
// map.set(true, "isAdmin");

// let userOne = {name : "Foo"};

// map.set(userOne, "User One");

// console.log(map.get(101))
// console.log(map.get(userOne))

// for(let key of map.keys()){
//   // console.log("value : ",  value)
//   console.log("key : ",  key)
// }

// for(let [key, value] of map.entries()){
//   console.log(`${JSON.stringify(key)} : ${value}`)
// }


// const set = new Set();

// const userOne = { name : "Foo"}
// const userTwo = { name : "Bar"}
// const userThree = { name : "Bam"}

// set.add(userOne)
// set.add(userTwo)
// set.add(userTwo)
// set.add(userThree)
// set.add(userThree)

// console.log(set.size);    


// Default/ optional Parameter
// const demo = (username, age, friends = []) => {
//   if(friends.length > 3){

//   }else{

//   }
// }

// demo("Foo", 32)





// Promsie 
// - Handle JS Asynchronous Behaviour
// - handshake between the producer code and consumer code
// - Two State - Success (resolve) / Failure (reject)
// - Consume Promise -> .then().catch() | Async...Await with try...catch



// Producer Code
const demoPromise = (arr) => {
  const promise = new Promise((resolve, reject) =>{
    if(arr.length > 2){
      setTimeout(() => {
        resolve("Data arrived...")
      }, 3000)
    }else{
      reject(new Error("Too low values"))
    }
  });
  return promise;
}

// Consumer Code
const callDemoPromise = async () => {
  try{
    const result = await demoPromise([1,2])
    console.log("REsult : ", result)
    console.log("End")
  }catch(err){
    console.log(err)
  }
}

callDemoPromise();




// demoPromise([1,2,3])
//   .then(result => {
//     console.log("Promise Resolved : ", result)
//     console.log("End")
//   }).catch(err => {
//     console.log("ERROR - ", err)
//   })








// console.log("Start")
// setTimeout(() => {
//   console.log("3 seconds passed...")
// }, 0)
// setTimeout(() => {
//   console.log("5 seconds passed...")
// }, 0)
// console.log("End")