export class Order
{
    
    public product? : string;
    public product_name? : string;
    public count? : number;
    public product_price? : number;
   
  
    constructor(product:string,name:string,count:number,price:number)
    {

        this.product = product;
        this.product_name = name;
        this.count = count;
        this.product_price = price;
      
       

    }
   
}