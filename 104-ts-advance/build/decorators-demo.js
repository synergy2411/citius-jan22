// Decorators - Simple Functions for meta-programming; prefixed with '@'
// Can be applied on Class, Properties, Methods, Parameters
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
function Log(target, propertyKey, propDescriptor) {
    console.log("TARGET : ", target);
    console.log("KEY : ", propertyKey);
    propDescriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return "Hello from ".concat(args[0]);
    };
}
var Ninja = /** @class */ (function () {
    function Ninja() {
    }
    Ninja.prototype.printNinja = function (str) {
        return "Black Belt Ninja - " + str;
    };
    __decorate([
        Log
    ], Ninja.prototype, "printNinja", null);
    return Ninja;
}());
var ninja = new Ninja();
console.log(ninja.printNinja("Yellow Belt Ninja"));
