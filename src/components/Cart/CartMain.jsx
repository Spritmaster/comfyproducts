import React from 'react'
import CartProductList from './CartProductList'
import CartPaymentInfo from './CartPaymentInfo'

const CartMain = () => {
  return (
    <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <CartProductList/>
        <CartPaymentInfo/>
    </div>
  )
}

export default CartMain