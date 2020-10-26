
export class ProductModel
{
    public product_name : string;
    public product_description : string;
    public product_price : number;
    public imagePath : string;



    constructor(name:string,desc:string,imagePath:string,price:number)
    {

        this.product_name = name;
        this.product_description = desc;
        this.imagePath = imagePath;
        this.product_price = price;

    }
}