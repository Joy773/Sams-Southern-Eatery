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
            <div className='flex overflow-x-auto whitespace-nowrap'>
            {category?.map((item, index) => (
                    <div key={index} className='px-5 flex items-center gap-2'>
                        <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                            {item.photo === "" || item.photo === undefined? "" : <Image src={"https://api.sams-eatery.com/api/alluploads/" + item.photo} width={45} height={12} alt='all items' />}
                            <span className='text-black text-[12px]'>{item.name}</span>
                        </Link>
                    </div>
            ))}
            </div>
        </section>
    )
}
