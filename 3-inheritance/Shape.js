"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Shape.prototype, "getx", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "setx", {
        set: function (n) {
            this.x = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "gety", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "sety", {
        set: function (n) {
            this.y = n;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "x:" + this.x + " ,y:" + this.y;
    };
    return Shape;
}());
exports.Shape = Shape;
