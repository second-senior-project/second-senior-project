interface SellProduct{
    name:string;
    image:string;
    sellerProduct:array;
    id:number;
    product:array;
    description:string;
     src:string;
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
  