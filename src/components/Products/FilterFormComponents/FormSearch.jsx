import React from 'react'

const FormSearch = ({labelFor,labelText, inputType, inputName , inputId , defaultValue}) => {
  return (
    <div className='form-control '>
    <label htmlFor={labelFor} className='label cursor-pointer'>
             <span className='label-text capitalize'>{labelText}</span>
         </label>
         <input type={inputType}  name={inputName} id={inputId} className='input input-bordered input-sm' 
         defaultValue={defaultValue}/>
      
     </div>
  )
}

export default FormSearch