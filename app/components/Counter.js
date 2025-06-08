'use client';
import React from 'react'
import { useState } from 'react';

export default function Counter({calculcateTotalPrice}) {
    const [count, setCount] = useState(1);

    return (
        <div>
            <button className='bg-orange-500 px-3 hover:bg-orange-800' onClick={() => {
                if (count > 1) 
                    setCount(count - 1)
                    calculcateTotalPrice(count - 1)
                ;
            }}
            >
                -
            </button>
            <span className='text-black bg-zinc-200 px-3 py-1'>{count}</span>
            <button className='bg-orange-500 px-3  hover:bg-orange-800' onClick={() => {setCount(count + 1),calculcateTotalPrice(count + 1)}}>+</button>
        </div>
    )
}
