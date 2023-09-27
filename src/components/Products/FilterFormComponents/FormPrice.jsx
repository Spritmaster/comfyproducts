import React, { useState } from 'react';
import { formatPrice } from '../../../utils';

const  FormPrice = ({ labelText, labelFor, type, name, minPrice, maxPrice, InputId }) => {
  const [money, setMoney] = useState(maxPrice);
  const formatMoney = formatPrice(money);

  return (
    <div className='form-control'>
      <label htmlFor={labelFor} className='label cursor-pointer'>
        <span className='label-text capitalize'>{labelText}</span>
        <span>{formatMoney}</span>
      </label>
      <input
        type={type}
        name={name}
        id={InputId}
        min={minPrice}
        max={maxPrice}
        value={money}
        className='range range-primary range-sm'
        step='1000'
        onChange={(e) => {
          setMoney(e.target.value);
        }}
      />
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormPrice;