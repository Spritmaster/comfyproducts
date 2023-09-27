import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductsGrid from './ProductsGrid'
import ProductsFlex from './ProductsFlex'
import { BsGridFill } from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'


const ProductsCartStyle = () => {
    const {products , meta} =useLoaderData()
    const productsTotal=meta.pagination.total

    const [cardGridFlex ,setCardGridFlex] =useState(localStorage.getItem('style')?localStorage.getItem('style'):'grid')

    const addStyle=(listStyle)=>localStorage.setItem('style', listStyle)
  return (
    <div>
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
    <h4 className="font-medium text-md">{productsTotal}</h4>
    <div className='flex gap-x-2'>
        <button type='button' className={`text-xl btn btn-circle btn-sm ${cardGridFlex === 'grid' ? 'btn-primary' : 'btn-info'} text-primary-content`} onClick={()=>{setCardGridFlex('grid'),addStyle('grid')}}>
            <BsGridFill className='text-base-300'/>
        </button>
        <button type='button' className={`text-xl btn btn-circle btn-sm ${cardGridFlex === 'flex' ? 'btn-primary' : 'btn-info'} text-primary-content`}
        onClick={()=>{setCardGridFlex('flex'),addStyle('flex')}}>
            <GiHamburgerMenu className='text-base-300'/>
        </button>
    </div>
</div>

{ products.length < 1 ? <h2 className='text-2xl mt-16'>Sorry, no products matched your search...</h2> : cardGridFlex ==='grid' ?<ProductsGrid/>:<ProductsFlex/>}
</div>
  )
}

export default ProductsCartStyle