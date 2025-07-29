"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'



export default function Category({category}) {

    return (
        <section className='w-full bg-white px-5'>
            <div className='px-5'>
                <h1 className='text-black text-[16px] font-semibold'>Category</h1>
            </div>
            <div className='flex overflow-x-auto gap-3 px-5 pb-4 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-200 hover:scrollbar-thumb-orange-500'>
            {category?.filter(item => 
                item.name.toLowerCase() !== 'sides' && 
                item.name.toLowerCase() !== 'wrap, gyro & over rice'
            ).map((item, index) => (
                    <div key={index} className='flex-shrink-0'>
                        <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded min-w-fit max-w-xs'>
                            {item.photo === "" || item.photo === undefined? "" : <Image src={"https://api.sams-eatery.com/api/alluploads/" + item.photo} width={45} height={12} alt='all items' />}
                            <span className='text-black text-[12px] whitespace-nowrap'>{item.name}</span>
                        </Link>
                    </div>
            ))}
            </div>
        </section>
    )
}
