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

var me = {
  firstName: "John",
  lastName: "Doe",
  address: {
    city: "Bengaluru",
    street: "201 Main Road, Marathahalli",
  },
  fruits: ["apple", "oranges", "papaya"],
};

var {
  firstName,
  lastName,
  address: { city, street },
  fruits: [fruit1, fruit2, fruit3],
} = me;

var users = [
  { name: "Jenny", age: 28 },
  { name: "James", age: 29 },
  { name: "Johny", age: 30 },
];

var [
    { name: n1, age: a1 }, 
    { name: n2, age: a2 }, 
    { name: n3, age: a3 }
] = users;

console.log(n2);
