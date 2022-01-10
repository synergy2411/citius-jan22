// Decorators - Simple Functions for meta-programming; prefixed with '@'
// Can be applied on Class, Properties, Methods, Parameters
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// CLASS LEVEL DECORATOR
// function Component(target : Function){
//     target.prototype.id = "N1099";
// }
// @Component
// class Ninja{
//     id : string;
// }
// let blackBeltNinja = new Ninja();
// console.log("ID : ", blackBeltNinja.id)
// function Component(options : {id : string, selector : string}){
//     return (target : Function & typeof Ninja) => {
//         target.classId = "C101"
//     }
// }
// @Component({
//     id : "N199",
//     selector : ""
// })
// class Ninja{
//     id : string;
//     static classId : string;
// }
// let blackBeltNinja = new Ninja();
// console.log("ID : ", blackBeltNinja.id)
// METHOD LEVEL DECORATOR
// function Log(target : Object, propertyKey : string, propDescriptor : PropertyDescriptor){
//     console.log("TARGET : ", target);
//     console.log("KEY : ", propertyKey);
//     propDescriptor.value = function(...args : any[]){
//         return `Hello from ${args[0]}`
//     }
// }
// class Ninja{
//     @Log
//     printNinja(str : string){
//         return "Black Belt Ninja - " + str;
//     }
// }
// let ninja = new Ninja();
// console.log(ninja.printNinja("Yellow Belt Ninja"))
// PROPERTY LEVEL DECORATOR
function Prop(target, key) {
    var value = "Default Name";
    var getter = function () { return value; };
    var setter = function (newValue) {
        console.log("Setting value to ", value);
        value = newValue;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        configurable: true,
        writable: true
    });
}
function Prop2(target, key) {
    var value = "Default Name";
    var getter = function () { return value; };
    var setter = function (newValue) {
        console.log("Setting value to ", value);
        value = newValue;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        configurable: true,
        writable: true
    });
}
var Human = /** @class */ (function () {
    function Human() {
    }
    __decorate([
        Prop,
        Prop2
    ], Human.prototype, "name", void 0);
    return Human;
}());
var foo = new Human();
console.log(foo.name);
foo.name = "Foo Bar";
console.log(foo.name);
// PARAMETER LEVEL DECORATOR
function Param(target, key, index) {
    console.log("Key : ", key);
    console.log("Index : ", index);
}
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.sayHello = function (username) {
        console.log("Hello " + username);
    };
    __decorate([
        __param(0, Param)
    ], User.prototype, "sayHello", null);
    return User;
}());
var u1 = new User();
u1.sayHello("Foo");
