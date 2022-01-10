# Angular -> TypeScript -> JavaScript -> ES6+ / ES2015

ES5 - specs given by ECMA Community
ES6/ES2015 - specs given by ECMA Community - 2015


ES2015+ feature -
- Arrow functions : short syntax
- Destructuring (Array / Objects)
- Spread / Rest Operator 
- Block scope variables
- Template literals
- Class
- Inheritance
- ES6 Module System
- Map / Set
- Promise
- Default / Optional Parameter


JavaScript Code 
- Browser : Client side JavaScript
- Node Runtime : Server side JavaScript


# What is JavaScript?
- Scripting language
- Dynamic language
- Used for client-side validation
- Providing programming capabilities
- Lightweight
- Single Threaded
- Fast
- Event Driven
- Non-blocking
- Async Task -> new thread assigned








MEAN | MERN | MEVN
Mongo Express Angular Node
Mongo Express React Node
Mongo Express Vue Node


> node <filename>


# Node installer
- Node Package Manager (NPM)
    : npmjs.com -> Node Packages -> 8L+
- Node Runtime Environment (NRE/ REPL)
- Node Native/Core Modules


# JavaScript Types
- Primitive Types : String, Numbers, Boolean
- Reference Types : Object, Array, Function, Date



> npm install -g typescript
> tsc --version
> tsc app.ts

# Generate tsconfig.json file in project
> npx tsc --init 


# Generating package.json file
> npm init -y
> npm run compile

> npm install bootstrap@4


# Angular Decorators
- Class : @Component({}) | @Directive({}) | @Pipe({}) | @Injectable({}) | @NgModule({})
- Method : @HostListener({})
- Property : @HostBinding({}) | @Input() | @Output()
- Parameter : @Inject() | @Optional

# Angular Building Blocks
- Component
- Directives
- Pipes
- Services
- Modules


# IIFE -> Immediately Invoked Function Expression
(function(){})()

# to create bundle file for namespace
> tsc --outfile bundle.js src/namespaces/app.ts src/namespaces/utils.ts
> node bundle.js