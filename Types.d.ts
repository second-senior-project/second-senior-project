interface Product {
    id: string;
    username: string;
    imgUrl: string;
    category: string;
    price: number;
    condition: string;
    tab:any
  }
  
  interface SellProduct{
    name:string;
    image:string;
    sellerProduct:array;
    id:number;
    product:array;
    description:string;
     src:string;
    el:any; 
}