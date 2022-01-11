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











# What is Angular ?
- Super heroic Framework
- UI Framework
- developed by Google
- SPA apps
- Built-in features
- Client-side MVC Architecture
- Integration of Third-party lib
- Great Community Support
- New Version arrives in every 6 month
- Shadow DOM

# Other Framework and Libraries
- Angular v2 Oct'2014 : Latest Version, Framework
- AngularJS v1 : 2011; Library
- React - Client-side JS Library to create UI; update the UI efficiently; Virtual DOM (JavaScript); Diffing Algorithm; Facebook Team; Great Community Support; SPA - react-router; State Management - react-redux; Form Validation - formik
- Vue - Template Oriented; Virtual DOM; Evan You; Evolving
- jQuery - DOM Manipulation, Animation, Ajax Calls
- Knockout - Two way data binding; MVVM Pattern
- Backbone - Client-side MVC
- Stencil - Create Custom Components
- **Ember - Framework; Frequent API changes;
- *Next - Full Stack App
- *Express - Web App framework for Node Platform
- *Node - Platform
- *Sails - Web app Framework
- *Kraken - Web App Framework


# What is DOM - Hierarchical representation of HTML 
html
    head
        title
        script
        meta
    body
        div
            image
        p

<product-detail></product-detail>
<user-details></user-details>
<div></div>
<p></p>



# to install Angular CLI Tool
> npm install -g @angular/cli@11
> ng --version
> ng new <project-name>
> ng new users-app
> cd users-app
> ng serve --open

> cd users-app
> npm install --force

> npm config rm proxy
> npm config rm https-proxy
> npm install --force

> npm run start | ng serve

# AOT - Ahead of Time Compiler
- Tree-shaking : remove unused code from app; App size can be reduced by 40%
- loading App quicker


- npm run build