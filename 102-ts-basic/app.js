// Type Inference | Explicit
// let x : number = 101;
// let username : string  = "John Doe";
// let isAdmin : boolean = true;
// let fn : Function = () => {}
// let fruits : Array<string> = ["Oranges", "Apples"]
// let user : Object = {
//     email : "", 
//     age : 32
// }
// let dob : Date = new Date("Dec 21, 2021")
// // any
// let xyz : any = "String";
// xyz = 101;
// xyz = true;
// xyz = {}
// xyz = [];
// xyz = () => {}
// unknown -> should be checked before assigning it
// let x : unknown = 101;
// let z : any = 201;
// x = "Some string";
// z = "New String";
// let y : string;
// if(typeof(x) === "string"){
//     y = x;
// }
// y = z;
// null
// let xyz : null = null;
// enum 
// enum Roles {
//     ADMIN,
//     USER,
//     EMPLOYEE
// }
// let role : Roles = Roles.USER
// Union Type
// let age : number | string = "Twenty Two";
// age = 32;
// Tuple
// let user : [string, number] = ["John Doe", 202]
// void
// const fn = () : void => {
//     console.log("Does not return anything")
// }
// console.log(fn());
// never
// const fn = () : never => {
//     throw new Error("Something bad happened")
// }
// console.log(fn());
// CUSTOM / STRUCTURAL TYPE
// type myType = string | number | boolean;
// let userNameOrAge : myType = "John Doe";
// userNameOrAge = 20;
// userNameOrAge = true;
// interface Person {
//     firstName : string;
//     lastName : string;
//     studId : string | number;
// }
// let student : Person = {
//     firstName : "Jenny",
//     lastName : "Doe",
//     studId : 101
// };
// class Foo{}
// class Bar{}
// class Bam{
//     constructor(foo : Foo, bar : Bar){}
// }
// new Bam(new Foo(), new Bar())
var Size;
(function (Size) {
    Size["BIG"] = "BIG";
    Size["SMALL"] = "SMALL";
})(Size || (Size = {}));
var Cat = /** @class */ (function () {
    function Cat(size, breed) {
        this.size = size;
        this.breed = breed;
    }
    Cat.prototype.walk = function () {
        console.log("This is ".concat(this.size, " ").concat(this.breed, " Cat, waling on street!!! "));
    };
    return Cat;
}());
var tiger = new Cat(Size.BIG, "Tiger");
tiger.walk();
