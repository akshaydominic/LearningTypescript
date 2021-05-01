"use strict";
var Customer = /** @class */ (function () {
    function Customer(name, lastname) {
        this._firstName = name;
        this._lastName = name;
    }
    return Customer;
}());
var mycustomer = new Customer("akshay", "a");
mycustomer._firstName = "susan";
mycustomer._lastName = "neon";
console.log("firstName : " + mycustomer._firstName + " LastName : " + mycustomer._lastName);
