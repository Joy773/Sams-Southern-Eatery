'use client'
import React from 'react'
import { useState } from 'react'
import Counter from './Counter';

export default function ProductPricing({price}) {
    const [basePrice, setbasePrice] = useState(price);
    const [totalPrice, setTotalPrice] = useState(price);
    const calculcateTotalPrice = (quantity) =>{
        
        setTotalPrice(basePrice*quantity)
    }
  return (
    <div>
        <div className='text-black font-bold text-[18px] pt-2'>
            ${totalPrice}
        </div>
        <div className='pt-2'>
            <Counter calculcateTotalPrice={calculcateTotalPrice}/>
        </div>
    </div>
  )
}
