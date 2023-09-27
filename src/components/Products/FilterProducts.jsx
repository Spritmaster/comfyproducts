import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import {FormCheckbox, FormPrice, FormSearch, FormSelect} from './index'

const FilterProducts = () => {
    const {meta , params} =useLoaderData()
    const { search, company, category, shipping, order, price } = params;
    const sortByArr = ['a-z', 'z-a', 'high', 'low'];

  return (
    <div className='mt-10'>
        <Form 
        className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center' 
        method='get'>

            <FormSearch
            labelFor='search'
            labelText='Search Product'
            inputType='search' 
            inputName='search' 
            inputId='search'
            defaultValue={search}
            />
            <FormSelect
             labelFor='category'
             labelText='Select category'
             selectName='category'
             defaultValue={category}
             selectId='category'
             optionArr={meta.categories}
             />
            <FormSelect
             labelFor='company'
             labelText='Select Company'
             selectName='company'
             defaultValue={company}
             selectId='company'
             optionArr={meta.companies}
             />
            <FormSelect
            labelFor='sort'
            labelText='Sort By'
            selectName='order'
            defaultValue={order}
            selectId='sort'
            optionArr={sortByArr}
             />
             <FormPrice
              labelText='Select Price'
              labelFor='price'
              type='range'
              name='price'
              minPrice={0}
              maxPrice={100000}
              inputId='price'
             />
             <FormCheckbox
             labelText='shipping'
             labelFor='shipping'
             type='checkbox'
             name='shipping'
             inputId='shipping'
             />

           

           <button type="submit" className='btn btn-primary btn-sm text-info'>SEARCH</button>
        <Link className='btn btn-secondary btn-sm text-info' onClick={()=>{useNavigate('products')}}>RESET</Link>

        </Form>
    </div>
  )
}

export default FilterProducts