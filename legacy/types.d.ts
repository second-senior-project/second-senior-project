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
    Product:array;
}

interface cart {
    name:string,
    total:number,
    el:error,
    id:number,
    product:string,
    Product:string,
    price:number,
    quantity:number,
    imgUrl:sting
}

export interface ProfileType {
  id: string;
  username: string;
  email: string;
}

export interface Passwords {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

  interface Item {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
  }

   interface Product {
    id: string;
    name: string;
    price: number;
    quantity?: number;
    imgUrl: string;
  }
  
   interface User {
    id: string;
  }

//  interface WishlistItemType {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   oldPrice?: number;
// }

 interface Props {
  item: WishlistItemType;
}
