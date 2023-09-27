import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../../utils'

const FeaturedGrid = () => {
    const {products} =useLoaderData()
  return (
    <div>
         <div className='py-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
        {products.map((product)=>{
            const {title,price ,image} =product.attributes
            const id=product.id
            const dolarPrice=formatPrice(price)
            return(
                <Link to={`/singleProduct/${id}`} className='card shadow-xl hover:shadow-2xl w-full ' key={id}>
                    <figure className='px-4  pt-4'>
                        <img  src={image} alt={title} className='rounded-xl h-64 md:h-48 w-full object-cover active:scale-110 active:h-64 active:w-full active:md:h-48 duration-300'/>
                    </figure>

                    <div className="card-body items-center text-center ">
                        <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                        <span className=''>{dolarPrice}</span>
                    </div>
                </Link>
            )
        })}
    </div>
    </div>
  )
}

export default FeaturedGrid