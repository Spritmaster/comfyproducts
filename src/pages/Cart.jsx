import React from 'react'
import { CartMain, CartTitle } from '../components'
import { useSelector } from 'react-redux'



const Cart = () => {
  const basket =useSelector((store)=>store.product.cartTotal)
  return (
<>
   <div className='align-elements py-20'>
      <CartTitle/>
      {basket  !== 0  ? <CartMain/> :null}
    </div>
</>
  )
}

export default Cart