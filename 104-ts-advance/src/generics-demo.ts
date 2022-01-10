// type numberarray = Array<number>;
// let numbers : numberarray = [1,2,3,4];

// type stringArray = Array<string>;
// let strings : stringArray = ['a','b','c'];

// type objArray = Array<{email : string, age : number}>;
// let obj : objArray = [
//     { email : "test@test.com", age : 32},
//     { email : "test@test.com", age : 32},
//     { email : "test@test.com", age : 32},
// ]



// Generic with Function

// const addAtBeginning = <T>(val : T , arr : T[]) : T[] => {
//     return [val, ...arr]
// }

// let v1 = addAtBeginning<number>(10, [21,32,43,54,65])

// let v2 = addAtBeginning<string>("ABC", ["PRQ", "XYZ"])


// let v1 = addAtBeginning(10, [21,32,43,54]);
// console.log(v1);

// let v2 = addAtBeginning("ABC", ["PQR", "XYZ"]);



// Generic with constraints
// interface Person {
//     firstName : string; 
//     lastName : string;
// }

// const getFullName = <T extends Person>(obj : T) => {
//     return {
//         ...obj,
//         fullName : obj.firstName + " " + obj.lastName
//     }
// }

// console.log(getFullName({firstName : "Foo", lastName : "Bar"}))
// console.log(getFullName({firstName : "Foo", lastName : "Bar", age : 32}))
// console.log(getFullName({firstName : "Foo", lastName : "Bar", age : 32, email : "test@test.com"}))


// Generic with Interface
interface Resource <T, U>{
    id : T;
    type : U;
}

let resoucre : Resource<number, string> = {
    id : 101,
    type : "Server 01"
}
let resoucre2 : Resource<string, number> = {
    id : "101",
    type : 100099
}

// Generic with Class
class Employee<T,U>{
    constructor(private empId : T, empAge :U){}
}

let emp1 = new Employee<string, number>("EMP0001", 32 )

let emp2 = new Employee<number, string>(10001, "Twenty Two");