"use strict";
// type numberarray = Array<number>;
// let numbers : numberarray = [1,2,3,4];
var resoucre = {
    id: 101,
    type: "Server 01"
};
var resoucre2 = {
    id: "101",
    type: 100099
};
// Generic with Class
var Employee = /** @class */ (function () {
    function Employee(empId, empAge) {
        this.empId = empId;
    }
    return Employee;
}());
var emp1 = new Employee("EMP0001", 32);
var emp2 = new Employee(10001, "Twenty Two");
