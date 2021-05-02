import {Shape} from "./Shape";

export class Rectangle extends Shape {
    CalculateArea(): number {
        return this._length*this._width;
    }
    constructor(theX:number,theY:number,private _length:number ,private _width:number){
        super(theX,theY);
    }
    
}