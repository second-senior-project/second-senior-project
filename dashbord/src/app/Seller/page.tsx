"use client"
import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useRouter } from 'next/navigation';
import AllSeller from './Seller';
const Seller = () => {
    const router=useRouter()
    const [seller, setSeller] = useState([])
    const getSeller=()=>{
        axios
        .get("http://localhost:4000/api/seller/seller")
        .then((response:any) => {
          setSeller(response.data);
          console.log("data",response.data);
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
    useEffect(()=>{getSeller()},[])
  return (
   <div className='divide-y  rounded-lg shadow-lg mt-9 ml-4 mr-4' >
  <>
      {seller.map((el, index) => (
        <div  key={index}>
          <AllSeller data={el} />
        </div>
      ))}
    </>
   </div>
  )
}

export default Seller