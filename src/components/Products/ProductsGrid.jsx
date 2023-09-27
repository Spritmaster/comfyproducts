import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../../utils';

const AllProductsWrapper = () => {
  const {products} =useLoaderData()
 
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>{
      products.map((card)=>{
        const {title,price,image} =card.attributes
        const dollarAmount=formatPrice(price)
        return (
          <Link to={`/singleProduct/${card.id}`} className='card shadow-xl hover:shadow-2xl w-full ' key={card.id}>
                    <figure className='px-4  pt-4'>
                        <img  src={image} alt={title} className='rounded-xl h-64 md:h-48 w-full object-cover'/>
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className='card-title capitalize tracking-wider'>{title}</h2>
                        <span className=''>{dollarAmount}</span>
                    </div>
                </Link>
        )
      })}</div>
  )
}

export default AllProductsWrapper