import React from 'react'
import { useSelector } from 'react-redux'

const CartTitle = () => {
    const cartProduct =useSelector((store)=>store.product.cardItem)
  return (
        <div className="border-b border-base-300 pb-5">
            <h2 className="text-3xl font-medium tracking-wider capitalize">
            {cartProduct.length !==0 ? 'Shopping Cart' : 'Your Cart Is Empty'}
            </h2>
      </div>
  )
}

export default CartTitle