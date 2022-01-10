// Decorators - Simple Functions for meta-programming; prefixed with '@'
// Can be applied on Class, Properties, Methods, Parameters


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
function Log(target : Object, propertyKey : string, propDescriptor : PropertyDescriptor){
    console.log("TARGET : ", target);
    console.log("KEY : ", propertyKey);
    propDescriptor.value = function(...args : any[]){
        return `Hello from ${args[0]}`
    }
}

class Ninja{
    @Log
    printNinja(str : string){
        return "Black Belt Ninja - " + str;
    }
}

let ninja = new Ninja();
console.log(ninja.printNinja("Yellow Belt Ninja"))