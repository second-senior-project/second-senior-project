"use client"
import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'
import AllProduct from './AllProduct'
import { useRouter } from 'next/navigation'
import axios from 'axios'


const Products = () => {
    const router = useRouter()
    const [sellerProduct, setSellerProduct] = useState<Product[]>([])
    const [update,setUpdate]=useState(false)
    const getProd=()=>{
      axios.get("http://localhost:4000/api/products").then((res)=>{setSellerProduct(res.data)
      setUpdate(!update)
        console.log("test",res.data);
        
      }).catch((err)=>console.log(err)
      )
    }
    useEffect(()=>{
      getProd()
    },[])

  return (
    <div>
      <div className="seller-interface-container">
        <div className="navbar-container"></div>
      
      
        <h2 className="products-heading">Your Products List</h2>
        <button flex-end onClick={()=>router.push("/AddProduct")}>addproduct</button>
        <div className="products-container ">
          <ul className="products-list flex">
            {sellerProduct
             
             .map((product, index) => (
                <div className="div" key={index}>
                  < AllProduct   el={product}  />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Products