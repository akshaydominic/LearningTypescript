class Customer{
   _firstName:string;
   _lastName:string;

   constructor(name:string,lastname:string){
       this._firstName=name;
       this._lastName=name;
   }
    
}
let mycustomer:Customer = new Customer("akshay","a");
mycustomer._firstName="susan";
mycustomer._lastName="neon";

console.log(`firstName : ${mycustomer._firstName} LastName : ${mycustomer._lastName}`);


