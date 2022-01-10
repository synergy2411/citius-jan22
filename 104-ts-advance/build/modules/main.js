"use strict";
// Named import
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {sum, LUCKY_NUMBER } from './maths';
// console.log("Sum is : ", sum(3,5));
// console.log("Lucky Number today is : ", LUCKY_NUMBER);
// import * as math from './maths';
// Default import 
var fortune_1 = __importDefault(require("./fortune"));
console.log((0, fortune_1.default)());
