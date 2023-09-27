import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../../utils'
import { NavLink } from 'react-router-dom'

const CartPaymentInfo = () => {
    const subTotal=useSelector((store)=>store.product.subtotalPrice)
    const shipping=useSelector((store)=>store.product. shipping)
    const tax=useSelector((store)=>store.product.tax)
    const orderTotal=useSelector((store)=>store.product.orderTotal)
  return (
    <div className='lg:col-span-4 lg:pl-4'>
        <div className='card bg-base-200'>
            <div className='card-body'>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                    <span>Subtotal</span>
                    <span className='font-medium'>{formatPrice(subTotal)}</span>
                </p>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                    <span>Shipping</span>
                    <span className='font-medium'>{formatPrice(shipping)}</span>
                </p>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                    <span>Tax</span>
                    <span className='font-medium'>{formatPrice(tax)}</span>
                </p>
                <p className='flex justify-between text-sm mt-4 pb-2'>
                    <span>Order Total</span>
                    <span className='font-medium'>{formatPrice(orderTotal)}</span>
                </p>
            </div>
        </div>


<NavLink className='btn btn-primary btn-block mt-8' to={'login'}>please login</NavLink>
    </div>
  )
}

export default CartPaymentInfo