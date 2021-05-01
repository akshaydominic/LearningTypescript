class Customer1{
    private _firstName:string;
    private _lastName:string;

    constructor(firstName :string ,lastName:string){
        this._firstName=firstName;
        this._lastName=lastName;
    }
    
    public get firstName():string{
        return this._firstName;
    } 
    public set firstName(Name:string){
        this._firstName=Name;
    }
   
     
 }
 let cus1 = new Customer1("akshay","a");
 cus1.firstName="john";
 console.log(cus1.firstName);

 
 
 
 