"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(10, 20, 40);
var myRectangle = new Rectangle_1.Rectangle(30, 20, 5, 5);
console.log("Radius :" + myCircle.CalculateArea());
console.log("Area of the Rectangle :" + myRectangle.CalculateArea());
