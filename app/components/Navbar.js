import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <section className='w-full bg-white p-5'>
      <div className='flex justify-center'>
        <Link href='/'>
          <Image src="/sams.jpeg" width={160} height={59} alt="sams-logo" />
        </Link>
      </div>
      <div className='flex justify-center p-5'>
        <Image src="/banner1.jpeg" width={452} height={433} alt="banner-logo" className='w-full rounded-md block' />
      </div>
      <div className='px-5 flex justify-between'>
        <h1 className='text-orange-800 text-[14px] font-bold'>Working Hours</h1>
        <h1 className='text-amber-900 font-bold text-[14px]'>09:00 AM - 05:00 PM</h1>
      </div>
      <div className='mx-5 mt-3'>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Search food...'
          className='w-full border-none bg-orange-50 outline-none text-gray-500 py-2'></input>
      </div>
     
    </section>
  )
}
