import { Circle } from "./Circle";
import {Rectangle} from "./Rectangle"

let myCircle = new Circle(10,20,40);
let myRectangle = new Rectangle(30,20,5,5);
console.log("Radius :"+myCircle.CalculateArea());
console.log("Area of the Rectangle :"+myRectangle.CalculateArea());

