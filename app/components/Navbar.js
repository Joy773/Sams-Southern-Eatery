"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Navbar() {

  const [banner, setBanner] = useState([]);
  const [index, SetIndex] = useState(0);



  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await axios.get('https://api.sams-eatery.com/banner');
        setBanner(res.data.data)
      }
      catch (err) {
        console.error("Failed to load banners:", err)
      }
    }
    fetchBanner();
  }, []);
  useEffect(() => {
    if (!banner.length)
      return;

    const interval = setInterval(() => {
      SetIndex((prev) => (prev + 1) % banner.length)
    }, 5000);

    return () => clearInterval(interval);
  }, [banner])



  return (
    <section className='w-full bg-white p-5'>
      <div className='flex justify-center'>
        <Link href='/'>
          <div className="bg-white p-2 rounded-md">
            <Image 
              src="/sams.jpeg" 
              width={160} 
              height={59} 
              alt="sams-logo" 
              className="bg-white rounded-md"
            />
          </div>
        </Link>
      </div>
      <div className='flex justify-center p-5'>
        {banner.length > 0 ? (
          <Image
            key={banner[index].image}
            src={`https://api.sams-eatery.com/api/alluploads/${banner[index].image}`}
            width={452}
            height={433}
            alt={banner[index].alt || "banner"}
            className="w-full rounded-md block"
          />
        ) : (
          <p className='text-black'>Loading banners...</p>
        )}
      </div>
      <div className='px-5 flex justify-between'>
        <h1 className='text-orange-800 text-[14px] font-bold'>Working Hours</h1>
        <h1 className='text-amber-900 font-bold text-[14px]'>09:00 AM - 05:00 PM</h1>
      </div>

    </section>
  )
}
