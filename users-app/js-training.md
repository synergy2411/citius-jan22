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
> ng serve --ssl

# AOT - Ahead of Time Compiler
- Tree-shaking : remove unused code from app; App size can be reduced by 40%
- loading App quicker


- npm run build


# View Encapsulation
- Emulated - Local First then Global CSS
- Shadow DOM - Restricted Local CSS
- None - Local CSS affects other Components


Comp1 -> None
Comp2 -> ShadowDOM 

Shadow DOM - Part of Your Actual DOM; Encapsulation


# Angular CLI Commands
- ng generate component path/to/component/componentName
- ng g c componentName
- ng g d directiveName
- ng g p pipeName
- ng g s serviceName
- ng g m moduleName

# Bootstrap Library 
- CSS Classes
- npm install bootstrap@4


users-app> ng g c components/users/user-image


# Atomic Design
- Atom : One button, one input field etc
- Molecule : Combo of Atom. eg. Searchbar -> input field + Button
- Organism : Combo of Molecules ; eg. navbar =>  Searchbar + Links
- Template : Combo of Organism; e.g form
- Page : Complete Page

user-image
user-info


# Component Types
- Smart : contains business logic for associated template
- Dump : Does not contain business logic

- Parent / Container : contains other component
- Child / Presentational : receives the data from parent, create the UI

- users comp : Parent / Container / Smart
- user-image : Child / Presentational / Dump
- user-info : Child / Presentational / Dump



const user = {
  name : "Foo"
}

Impure Change
user.name = "Bar;

Pure Change
user = {
  name : "Bam
}

const fruits = ["apple", "grapes", "banana"];

fruits.push("guava");     // impure change

fruits = ["apple", "grapes", "banana", "guava"]   // pure change



# Angular Forms - States and Classes - Form & Form Control
- ngValid / ngInvalid
- ngTouched / ngUntouched
- ngPristine / ngDirty


# Model Driven Form / Reactive Forms
- Validation on Model
- Angular Validations
- ReactiveFormsModules
- More fine grained control
- Custom Validations
- Dynamically generate the form
- FormControl : individual form control
- FormGroup : group of individual form controls
- FormBuilder: build form by grouping all individual form controls


# Model Driven Form

- firstName - input
- lastName - input
- email - email
- password - password field
- confirm password
- country - selectbox
- User Type : Radio button (Admin | Employee)
- TnC - Checkbox
- skills - FormArray - inside form group



# Service - ES6 class with @Injectable()
- business logic
- Dependency Injection
- Singleton 

# Hierarchical Injection Tree
- Root Module : Singleton instance available application-wide
- Root Component : Singleton instance available in Root Component and other child components, other services will NOT receive the same singleton instance
- Other Component : Singleton instance available in self and child components only.


# Observable
- Stream on which series of data/events emitted at certain time interval
- Both Sync as well Async
- Operators
- Creational Operators : from, of, fromEvent, interval, Observable
- Filtering Operators : take, takeUntil, takeWhile, filter, first, skip, last
- References - rxjs.dev | learnrxjs.io
- Subject : both observable as well observer (subscribe, pipe, next, error, complete)
- Subject Types - BehaviourSubject, ReplaySubject, AsyncSubject


# Remote Server Calls with HttpClient

# Service Integration with HTTP

# Routing - Creating SPA


# PostService : Create, Read, Update, Delete

# Post Model - id, title, body, published



# Observables
- Sync and Async
- Are Cancelable
- Emit the series of data/event
- Observer the data source
- No over under-fetching / under-fetching
- Pipeable Operators


# Promises
- Always Async
- Can NOT cancel
- returns one value
- one shot
- Over-fetching








# Routing - Creating SPA
- Single Page Apps
- No page reload/refresh
- Content will display depending upon the URL
- All contents get loaded at very first time
- User interactivity
- Less network congestion
- Less Server interaction
- Reusability


# Routing Terminologies
- Routes : Configure the route for App
- RouterModule : Supply the Routes for App
- RouterOutlet : provides the space to load the component template
- RouterLink : prevent the page reload, bind dynamically
- Router Class : programmatically navigate the user
- ActivatedRoute : access the activated URL/Route
- CanActivate : allow / does not allow to enter the route
- CanDeactivate : allow / does not allow to leave the route
- Resolve : pre-populate the data into component

> ng g m modules/lazy
