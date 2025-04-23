import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Items() {
  return (
    <section className='w-full bg-white p-5'>
      <div className='flex justify-center px-5'>
      <div className='grid lg:grid-cols-3 md: grid-cols-2 gap-10'>
        <Link href='/' className='shadow-lg p-5'>
          <Image src="/burger_one.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl'/>
          <h1 className='text-black text-[16px] font-semibold mt-3'>Southern Single Burger</h1>
          <p className='text-zinc-600 text-[12px] '>Beef Patty, Lettuce, Tomato, Mayonnaise, Onion, Pickle.</p>
          <h1 className='text-black font-semibold my-2'>$8.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        <Link href='/' className='shadow-lg p-5'>
          <Image src="/burger_two.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>Southern Double Burger</h1>
          <p className='text-zinc-600 text-[12px] '>Two beef patty, lettuce, tomato, mayonnaise, onion, Pickle.</p>
          <h1 className='text-black font-semibold my-2'>$8.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        <Link href='/' className='shadow-lg p-5'>
          <Image src="/item3.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>Philly CHeese Steak Sandwich</h1>
          <p className='text-zinc-600 text-[12px] '>Beef, grilled onions, peppers, Swiss cheese, and mayonnaise</p>
          <h1 className='text-black font-semibold my-2'>$11.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        <Link href='/' className='shadow-lg p-5'>
          <Image src="/item4.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>Philly Chicken Sandwich</h1>
          <p className='text-zinc-600 text-[12px] '>Chicken, bell pepper, and onions</p>
          <h1 className='text-black font-semibold my-2'>$11.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        
        <Link href='/' className='shadow-lg p-5'>
          <Image src="/item5.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>Fried Chicken Po'Boy</h1>
          <p className='text-zinc-600 text-[12px] '>Lettuce, onions, tomatoes, and pickles</p>
          <h1 className='text-black font-semibold my-2'>$11.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        <Link href='/' className='shadow-lg p-5'>
          <Image src="/item6.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>Oyster Po'Boy</h1>
          <p className='text-zinc-600 text-[12px] '>Four oysters, Sam's sauce, lettuce, tomatoes and onions</p>
          <h1 className='text-black font-semibold my-2'>$11.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        <Link href='/' className='shadow-lg p-5'>
          <Image src="/item7.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>Grilled Shrimp Po'Boy</h1>
          <p className='text-zinc-600 text-[12px] '>Four jumpo shrimp, Sam's sauce, lettuce and onions</p>
          <h1 className='text-black font-semibold my-2'>$12.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        <Link href='/' className='shadow-lg p-5'>
          <Image src="/item8.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>Fried Shrimp Po'Boy</h1>
          <p className='text-zinc-600 text-[12px] '>Four jumpo shrimp, Sam's sauce, lettuce and onions</p>
          <h1 className='text-black font-semibold my-2'>$12.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        <Link href='/' className='shadow-lg p-5'>
          <Image src="/item9.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>6-Piece Fish</h1>
          <p className='text-zinc-600 text-[12px] '>Pangasius, Farm-raised product of Vietnam</p>
          <h1 className='text-black font-semibold my-2'>$17.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>

        <Link href='/' className='shadow-lg p-5'>
          <Image src="/item8.jpeg" width={500} height={394} alt='burger picture' className='rounded-xl' />
          <h1 className='text-black text-[16px] font-semibold mt-3'>Chicken grill kebab</h1>
          <p className='text-zinc-600 text-[12px] '>Four jumpo shrimp, Sam's sauce, lettuce and onions</p>
          <h1 className='text-black font-semibold my-2'>$100.99</h1>
          <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
        </Link>
      </div>
      </div>
    </section>
  )
}
