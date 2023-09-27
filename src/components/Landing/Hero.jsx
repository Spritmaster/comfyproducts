import React from 'react'
import hero1 from '../../assets/hero1.webp'
import hero2 from '../../assets/hero2.webp'
import hero3 from '../../assets/hero3.webp'
import hero4 from '../../assets/hero4.webp'
import { NavLink } from 'react-router-dom'

const Hero = () => {
    const carueselImages =[hero1,hero2,hero3,hero4]
  return (
<div className="pt-20 text-base-300 align-elements">
<div className='grid lg:grid-cols-2 gap-24 items-center'>
    <div>
    <h1 className='tracking-tight text-4xl sm:text-6xl font-bold max-w-2xl '>We are changing the way people shop</h1>
    <p className='max-w-xl leading-8 text-lg mt-8 '>Hello, Mr. User, you can buy what you need in our online store. The main part of our products is furniture. But in the future, we will increase the variety of our products.</p>

    <NavLink to={'/products'} className="btn btn-primary mt-10 base-100 text-info">Our Products</NavLink>
    </div>
    <div className=" hidden lg:carousel carousel-center   space-x-4 bg-neutral rounded-box max-w-[450px]   p-4">
  {carueselImages && carueselImages.map((images,i)=>{
    return(
        <div className="carousel-item" key={i+Math.random()}>
        <img src={`${images}`} className="rounded-box w-[252px] h-[350px] bg-contain " />
      </div>   
    )
  })}
</div>
  </div>
</div>
  )
}

export default Hero