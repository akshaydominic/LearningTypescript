import {Shape} from "./Shape";
export class Rectangle extends Shape{
    constructor(thex:number,they:number,private _length:number,private _width:number){
        super(thex,they);
    }
    getInfo():string{
        return super.getInfo()+` length: ${this._length} width:${this._width}`;
    }


}