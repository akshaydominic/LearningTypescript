import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myshape = new Shape(10,0);
let myCircle = new Circle(20,20,3);
let myRectangle = new Rectangle(19,299,2,2,);

let DriverArray:Shape[]=[];
DriverArray.push(myshape);
DriverArray.push(myCircle);
DriverArray.push(myRectangle);

//looping
for(let theObject of DriverArray){
    console.log(theObject.getInfo());
}
