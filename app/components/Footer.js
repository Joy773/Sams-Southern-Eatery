import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Italianno } from 'next/font/google'

const italianno = Italianno({
  subsets: ['latin'],
  weight: '400',
})

export default function Footer() {
  return (
    <section className='w-full p-5 bg-orange-100'>
      <div className='flex justify-center items-center'>
        <Link href="/">
          <Image src="/sams-logo.jpeg" width={160} height={59} alt="sams logo" />
        </Link>
      </div>

      <div>
        <h1 className={`text-black text-center mt-2 text-[30px] ${italianno.className}`}>" Home Style Southern Cooking "</h1>
      </div>

      <footer className="text-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Menus</h3>
            <ul className="space-y-2 text-sm ">
              <Link href='/'><li>Po'Boys & Burgers</li></Link>
              <Link href='/'><li>Salads</li></Link>
              <Link href='/'><li>Seafood</li></Link>
              <Link href='/'><li>Chicken</li></Link>
              <Link href='/'><li>Cumbo</li></Link>
              <Link href='/'><li>Family Portions</li></Link>
              <Link href='/'><li>Appetizers</li></Link>
              <Link href='/'><li>Drinks</li></Link>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <Link href='/'><li>About Us</li></Link>
              <Link href='/'><li>Contact Us</li></Link>
              <Link href='/'><li>Customer Review</li></Link>
              <Link href='/'><li>Privacy Policy</li></Link>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">ContactUs</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <span className="text-orange-500"></span>
                <span>254 213 0758</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-orange-500"></span>
                <span>killeenseafoodnmore@sams-eatery.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-orange-500"></span>
                <span>201 E Rancier Ave, Killeen, TX 76541, United States</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className='flex justify-center items-center gap-3'>
        <Image src="/card1.svg" width={36} height={23} alt='card-one' />
        <Image src="/card2.svg" width={36} height={23} alt='card-two' />
        <Image src="/card3.svg" width={36} height={23} alt='card-three' />
        <Image src="/card4.svg" width={36} height={23} alt='card-four' />
      </div>

      <div className='flex justify-center mt-3'>
        <h1 className='text-black text-[14px] mr-1'>©2025
        All rights reserved by</h1>
        <Image src="/sams.jpeg" width={64} height={23} alt='sams-logo' />
      </div>
    </section>
  )
}
