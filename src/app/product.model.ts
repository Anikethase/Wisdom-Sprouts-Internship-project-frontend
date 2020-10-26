import {Category} from './category.model';
export class Product
{
    public _id? : string
    public product_name : string;
    public product_description : string;
    public productImagePath : string;
    public product_price : number;
    public product_stock : number;
    public category :[Category]

    constructor(p_name:string,p_desc:string,p_imagePath:string,p_price:number)
    {

        this.product_name = p_name;
        this.product_description = p_desc;
        this.productImagePath = p_imagePath;
        this.product_price = p_price;
    }
}