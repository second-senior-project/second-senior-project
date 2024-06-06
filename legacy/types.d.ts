interface SellProduct{
    name:string;
    image:string;
    sellerProduct:array;
    id:number;
    price:number;
    product:array;
    description:string;
     src:string;
<<<<<<< HEAD
    el:any;
}
=======
    el:any;button :
}interface User {
    id: number;
    name: string;
    email: string;
  }
  
  interface Seller {
    id: number;
    name: string;
    email: string;
  }
  
  interface Admin {
    id: number;
    name: string;
    email: string;
  }
  
  interface AuthContextType {
    token: string;
    user: User | null;
    seller: Seller | null;
    admin: Admin | null;
    loginAction: (data: any) => Promise<void>;
    logOut: () => void;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  }
>>>>>>> f65f58c79eb07436ecc1ac4ece52f7b1bf3967b5
