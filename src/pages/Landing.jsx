import React from 'react'
import { customFetch } from '../utils'
import { FeaturedProducts, Hero } from '../components'


const url='/products?featured=true'

export const loader =async ()=>{
  const reques =await customFetch(url)
  const products =reques.data.data
  return {products}
 }

const Landing = () => {
  return (
    <>
    <Hero/>
    <FeaturedProducts/>
    </>
  )
}

export default Landing