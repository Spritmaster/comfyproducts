import React from 'react'

const FormSelect = ({labelText ,labelFor , selectName , selectId ,optionArr ,  labelClas ,selectClas,defaultValue}) => {
  return (
    <div className={`form-control `}>
    <label htmlFor={labelFor} className='label'>
      <span className={`label-text capitalize ${labelClas}`}>{labelText}</span>
    </label>
    <select 
    name={selectName} 
    id={selectId} 
    className={`select select-bordered select-sm ${selectClas}`} 
    onClick={(e)=>{console.log(e.target.value)}}  
    defaultValue={defaultValue}
    >
        {optionArr.map((option)=>{
            return (
                <option value={option} key={option}>{option}</option>
            )
        })}
    </select >
</div>
  )
}

export default FormSelect