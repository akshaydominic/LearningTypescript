export class Customer1{
    private _firstName:string;
    private _lastName:string;

    constructor(firstName :string ,lastName:string){
        this._firstName=firstName;
        this._lastName=lastName;
    }
    
    get firstName():string{
        return this._firstName;
    } 
    set firstName(Name:string){
        this._firstName=Name;
    }
   
     
 }
 

 
 
 
 