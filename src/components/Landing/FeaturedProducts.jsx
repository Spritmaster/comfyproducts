import React from 'react'
import FeaturedTitle from './FeaturedTitle'
import FeaturedGrid from './FeaturedGrid'

const FeaturedProducts = () => {
  return (
    <div className='pt-24'>
        <FeaturedTitle text={'Featured Products'}/>
        <FeaturedGrid/>
    </div>
  )
}

export default FeaturedProducts