var MySounds;
(function (MySounds) {
    MySounds.dogSound = "Buff Buff";
    MySounds.speak = function () { return "Hello World!"; };
    var Duck;
    (function (Duck) {
        Duck.speak = "Quack Quack";
    })(Duck = MySounds.Duck || (MySounds.Duck = {}));
})(MySounds || (MySounds = {}));
console.log(MySounds.dogSound);
console.log(MySounds.speak());
console.log(MySounds.Duck.speak);
/// <reference path="./utils.ts" />
console.log(MySounds.dogSound);
