"use strict";
var Customer1 = /** @class */ (function () {
    function Customer1(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (Name) {
            this._firstName = Name;
        },
        enumerable: false,
        configurable: true
    });
    return Customer1;
}());
var cus1 = new Customer1("akshay", "a");
cus1.firstName = "john";
console.log(cus1.firstName);
