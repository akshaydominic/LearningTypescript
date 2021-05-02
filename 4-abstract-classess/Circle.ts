import {Shape} from "./Shape";

export class Circle extends Shape{
    CalculateArea(): number {
        return Math.PI * Math.pow(this._radius,2);
        
    }
    constructor(theX:number,theY:number,private _radius:number){
        super(theX,theY);
    }
}