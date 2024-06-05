"use client"
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import AllProduct from './AllProduct'
import { useRouter } from 'next/navigation'


const Products = () => {
    const router = useRouter()
    // const [sellerProduct, setSellerProduct] = useState<Product[]>([])
const sellerProduct=[{
    id:1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfiIiWT3jxJr2vipYyTT94TauTimDjTwJJw&s',
    name:"test",
    price:200,
    description:"   Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
},{
    id:2,
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FHarrisonsDepartmentStore%2Fphotos%2Fstay-tunedbig-sale-announcement-is-coming-soon-and-you-wont-want-to-miss-it%2F10156512299990797%2F&psig=AOvVaw0rQ2F-Bx4sFRvCnQmLdQ1d&ust=1717618109636000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDo_5bvwoYDFQAAAAAdAAAAABAE',
    name:"test1",
    price:200,
    description:"   Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
},
{
    id:3,
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FHarrisonsDepartmentStore%2Fphotos%2Fstay-tunedbig-sale-announcement-is-coming-soon-and-you-wont-want-to-miss-it%2F10156512299990797%2F&psig=AOvVaw0rQ2F-Bx4sFRvCnQmLdQ1d&ust=1717618109636000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDo_5bvwoYDFQAAAAAdAAAAABAE',
    name:"test2",
    price:200,
    description:"   Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
}]
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