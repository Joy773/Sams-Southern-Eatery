import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Category() {
    return (
        <section className='w-full bg-white px-5'>
            <div className='px-5'>
                <h1 className='text-black text-[16px] font-semibold'>Category</h1>
            </div>
            <div className='flex'>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/allitems.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>All items</span>
                    </Link>
                </div>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/burger.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>Po'Boys & Burgers</span>
                    </Link>
                </div>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/salad.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>Salads</span>
                    </Link>
                </div>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/seafood.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>Seafood</span>
                    </Link>
                </div>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/chicken.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>Chicken</span>
                    </Link>
                </div>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/gumbo.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>Cumbo</span>
                    </Link>
                </div>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/familyportions.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>Family Portions</span>
                    </Link>
                </div>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/Appetizers.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>Appetizers</span>
                    </Link>
                </div>
                <div className='px-5 flex items-center gap-2'>
                    <Link href='/' className='flex items-center gap-2 bg-orange-100 p-2 rounded'>
                        <Image src="/Drink.png" width={45} height={12} alt='all items' />
                        <span className='text-black text-[12px]'>Drinks</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
