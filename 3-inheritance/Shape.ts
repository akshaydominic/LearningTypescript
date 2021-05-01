export  class Shape{
    
    constructor(private x:number,private y:number){

    }

    get getx():number{
        return this.x;
    }
    set setx(n:number){
        this.x=n;
    }
    get gety():number{
        return this.y;
    }
    set sety(n:number){
        this.y=n;
    }

    getInfo():string{
        return `x:${this.x} ,y:${this.y}`;
    }

}