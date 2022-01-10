// Access Modifiers -> private | public | protected
// Getter / Setter

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

abstract class Fighter {
    abstract fight() : string;
    move(){
        console.log("Kicking")
    }
}

class Ryu extends Fighter{
    fight(): string {
        super.move()
        return 'Lightening Kick ';
    }
}

let ryu = new Ryu();
console.log(ryu.fight())
ryu.move()



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