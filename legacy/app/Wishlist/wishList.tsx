import React from 'react'
import AllProduct from '../HomePage/AllProduct'

const wishList = () => {
  return (
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
      <Head>
        <title>Favourites</title>
      </Head>
      <AllProduct />
    </div>

  )
}

export default wishList