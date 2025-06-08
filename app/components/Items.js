import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Items({products}) {
  return (
    <section className='w-full bg-white p-5'>
      {/* {products?.map((menu, idx)=>(
        <div key={idx}>
          <div className='flex justify-center px-5'>
            <div className='grid lg:grid-cols-3 md: grid-cols-2 gap-10'>
              {menu.products?.map((product)=>(
                <Link href='/' className='shadow-lg p-5' key={product?._id}>
                  {product.images?.map((image,index)=>(
                    <Image key={index} src={`https://api.sams-eatery.com/api/alluploads/${image}`} width={500} height={394} alt='burger picture' className='rounded-xl'/>
                  ))}
                  <h1 className='text-black text-[16px] font-semibold mt-3'>{product.name}</h1>
                  <p className='text-zinc-600 text-[12px] '>{product.description}</p>
                  <h1 className='text-black font-semibold my-2'>${product.price}</h1>
                  <button className='bg-orange-600 py-3 px-5 rounded-lg'>Order Now</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))} */}
    </section>
  )
}