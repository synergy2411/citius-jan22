"use strict";
// Access Modifiers -> private | public | protected
// Getter / Setter
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Animal {
//     private _species : string = "DEFAULT";
//     get species(){  
//         return "My Favorate is " + this._species
//     }
//     set species(newVal : string){
//         if(newVal.length > 3){
//             this._species= newVal;
//         }else{
//             this._species = "DEFAULT";
//         }
//     }
// }
// let tiger = new Animal()
// console.log(tiger.species);
// tiger.species = "TIGER";
// console.log(tiger.species);
// tiger.species = "ABC";
// console.log(tiger.species);
// Method Overloading
// function aboutUser(username : string) : string;
// function aboutUser(username : string, age? : number) : string;
// function aboutUser(username : string, age? : number, isAdmin? : boolean) : string;
// function aboutUser(username : string, age? : number, isAdmin? : boolean) : string{
//     if(age!==undefined && !isAdmin){
//         return `About username : ${username} | Age : ${age} | Admin : ${isAdmin}`
//     }else if(!isAdmin){
//         return `About username  : ${username} | Age : ${age}`
//     }else{
//         return `About User name : ${username}`
//     }
// }
// console.log(aboutUser("Foo Bar", 32, true))
// Abstract classes
var Fighter = /** @class */ (function () {
    function Fighter() {
    }
    Fighter.prototype.move = function () {
        console.log("Kicking");
    };
    return Fighter;
}());
var Ryu = /** @class */ (function (_super) {
    __extends(Ryu, _super);
    function Ryu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ryu.prototype.fight = function () {
        _super.prototype.move.call(this);
        return 'Lightening Kick ';
    };
    return Ryu;
}(Fighter));
var ryu = new Ryu();
console.log(ryu.fight());
ryu.move();
// interface Resource{
//     id : string;
//     getDetails : () => string;
// }
// class MyResource implements Resource{
//     id: string = "101";
//     getDetails(){
//         return ''
//     };
// }
