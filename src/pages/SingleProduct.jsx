import React, { useState } from 'react'
import {  Link, useLoaderData} from 'react-router-dom'
import { formatPrice, customFetch ,generateAmountOptions} from '../utils'
import {useDispatch} from 'react-redux'
import { addProduct } from '../redux/fetures/productsSlice'


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



export const loader = async({params}) =>{
  const request =await customFetch(`/products/${params.id}`)
  return {product : request.data.data}
}



const SingleProduct = () => {
  const {product} =useLoaderData()
  const dispatch=useDispatch()

  const notify = () => toast.success("Item added to cart!", {
    position: toast.POSITION.TOP_CENTER
});
   
  
  const {title,company,image,price,colors,description }=product.attributes
  const id=product.id

  const dolarAmount=formatPrice(price)
  const [color, setColor] = useState(colors[0]);
  const [amount,setAmount] =useState(1)

  const handleAmount=(e)=>setAmount(parseInt(e.target.value))
  let cartId=id+color
  const item ={cartId ,id,title,company,image,price,color,amount}
  function addTOCard() {
    notify()
    dispatch(addProduct(item))
  } 
  return (
    
    <section className='align-elements py-10'>
       <ToastContainer />
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img src={image} alt="title" className='w-96 h-96 object-cover rounded-lg lg:w-full'/>
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>

          <p className="mt-3 text-xl">{dolarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className='text-md font-medium tracking-wider capitalize'>Colors</h4>
            <div className="mt-2">
              {colors.map((col,i)=>{
                return(
            <button
              onClick={() => {setColor(col)}}
              className={` ${color === col ? "border-secondary border-2" : ""} badge w-6 h-6 mr-2 `}
              style={{ backgroundColor: col }}
              key={i}
            ></button>
                )
              })}
              {/*input  */}
              <div className="form-control">
                <label className='label'>
                  <h4 className='text-md font-medium tracking-wider capitalize'>Amount</h4>
                </label>
                <select  
                id="amount" 
                className='select select-secondary select-bordered select-md'
                value={amount}
                onChange={handleAmount}>
              { generateAmountOptions(10) }
                </select>
              </div>

              <div className="mt-10">
                <button className='btn btn-error btn-md' 
                onClick={()=>{addTOCard()}}
                >ADD TO BAG</button>
                  
       
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default SingleProduct