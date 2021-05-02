"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myshape = new Shape_1.Shape(10, 0);
var myCircle = new Circle_1.Circle(20, 20, 3);
var myRectangle = new Rectangle_1.Rectangle(19, 299, 2, 2);
var DriverArray = [];
DriverArray.push(myshape);
DriverArray.push(myCircle);
DriverArray.push(myRectangle);
//looping
for (var _i = 0, DriverArray_1 = DriverArray; _i < DriverArray_1.length; _i++) {
    var theObject = DriverArray_1[_i];
    console.log(theObject.getInfo());
}
