import {Shape} from "./Shape";
import {Circle} from "./Circle";
import{Rectangle} from "./Rectangle";

let shape = new Shape(5,10);
console.log(shape.getInfo());
let circle = new Circle(15,20,5);
console.log(circle.getInfo());
let rectangle = new Rectangle(400,122,121,22);
console.log(rectangle.getInfo());