import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  removeProduct } from '../../redux/fetures/productsSlice'
import { generateAmountOptions } from '../../utils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartProductList = () => {
    const dispatch=useDispatch()
    const products    =   useSelector((store)=>store.product.cardItem)

  const notify = () => toast.error("Item removed from cart!", {
    position: toast.POSITION.TOP_CENTER
    
  });
  return (
    <div className='lg:col-span-8'>
        {products ? products.map((product)=>{
            const {cartId ,id,title ,image,company ,color ,amount,price}=product
            
           
            return(
              <div key={cartId} className='lg:col-span-8'>
                  <ToastContainer />
                <div className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'>
                  <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'/>

                  <div className='sm:ml-16 sm:w-48'>
                    <h3 className='capitalize font-medium'>{title}</h3>
                    <h4 className='mt-2 capitalize text-sm text-neutral'> {company}</h4>
                    <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
                      Color : <span className='badge badge-sm' style={{background:color}}></span>
                    </p>
                  </div>

                  <div className='sm:ml-12'>
                    <div className='form-control max-w-xs'>
                      <label htmlFor={color + "amount"} className='label p-0'>
                        <span className='label-text'>Amount</span>
                      </label>
                      <select 
                      name={title} 
                      id={color+"amount"} className='mt-2 select select-base select-bordered select-xs'
                      value={amount}
                      onChange={()=>{''}}>
                        {generateAmountOptions(amount+5)}
                      </select>
                    </div>

                    <button 
                    className='mt-2 link link-primary link-hover text-sm'
                    onClick={()=>{dispatch(removeProduct(product)) ,notify()}}>remove</button>
                  </div>
                </div>
              </div>
            )
        }) : null}
    </div>
  )
}

export default CartProductList