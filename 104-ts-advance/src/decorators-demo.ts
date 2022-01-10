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
function Prop(target : Object, key : string){
    let value : string = "Default Name";
    const getter = () => value;
    const setter = (newValue) => {
        console.log("Setting value to ", value)
        value = newValue;
    }
    Object.defineProperty(target, key, {
        get : getter,
        set : setter,
        configurable : true,
        writable: true
    })
}
function Prop2(target : Object, key : string){
    let value : string = "Default Name";
    const getter = () => value;
    const setter = (newValue) => {
        console.log("Setting value to ", value)
        value = newValue;
    }
    Object.defineProperty(target, key, {
        get : getter,
        set : setter,
        configurable : true,
        writable: true
    })
}

class Human{
    @Prop
    @Prop2
    name : string;
}
let foo = new Human();
console.log(foo.name);
foo.name = "Foo Bar";
console.log(foo.name);




// PARAMETER LEVEL DECORATOR

function Param(target : Object, key : string, index : number){
    console.log("Key : ", key);
    console.log("Index : ", index);
}

class User{
    sayHello(@Param username : string){
        console.log("Hello " + username);
    }
}

let u1 = new User();
u1.sayHello("Foo");



