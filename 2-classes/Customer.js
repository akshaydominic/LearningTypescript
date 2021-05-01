"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer1 = void 0;
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
exports.Customer1 = Customer1;
