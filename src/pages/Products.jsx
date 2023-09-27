import React from 'react'
import { customFetch } from '../utils'
import { FilterProducts, PaginationContainer } from '../components'
import ProductsCartStyle from '../components/Products/ProductsCartStyle'


const url='/products'

export const loader = async ({ request }) => {
    const params =Object.fromEntries([
        ...new URL(request.url).searchParams.entries()
    ])
    const response= await customFetch(url,{
        params
    })
    const products =  response.data.data
    const meta =response.data.meta
    return {products , meta ,params}
}



const Products = () => {
  return (
    <div>
        <FilterProducts/>
        <ProductsCartStyle/>
        <PaginationContainer/>
    </div>
  )
}

export default Products