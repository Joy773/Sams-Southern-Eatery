"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Italianno } from 'next/font/google'
import ProductPricing from '@/app/components/ProductPricing'
import { FaShoppingCart } from "react-icons/fa";
import { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '@/app/features/shopCart/cartSlice'

const italianno = Italianno({
  subsets: ['latin'],
  weight: '400',
})

export default function ProductDetail({ params }) {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(state => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
)
  const handleAddToCart = () => {
    dispatch(addItem({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    }))
  }
  const [selections, setSelections] = useState ({
    firstSide: null,
    secondSide: null,
  })
  const handleSelect = (sideType, item) => {
    setSelections(prev => ({
      ...prev,
      [sideType]: item
    }));
  };
  const unwrappedParams = use(params)
  const { id } = unwrappedParams
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://api.sams-eatery.com/product/${id}`)
        setProduct(res.data);
      }
      catch (error) {
        console.error("Error while fetching product", error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className='flex items-center justify-center h-screen text-3xl'>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  const productimage = `https://api.sams-eatery.com/api/alluploads/${product.images[0]}`;
  return (
    <section className="p-6 bg-white">
      <div className="relative flex items-center h-16">
        <Link href="/cart" className="relative">
  <FaShoppingCart className="text-orange-500 text-3xl absolute left-4" />
  {cartItemsCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {cartItemsCount}
    </span>
  )}
</Link>
        <div className="mx-auto">
          <Link href="/">
            <Image src="/sams.jpeg" width={160} height={59} alt="sams-logo" />
          </Link>
        </div>
      </div>
      <div className='py-5 px-50'>
        <div>
          <Image
            src={productimage}
            width={500}
            height={300}
            alt='image'
          />
        </div>
        <div className='text-black font-bold text-[24px]'>
          {product.name}
        </div>
        <div className='text-sm text-black whitespace-pre-line leading-[22px]'>
          {product.description}
        </div>
        <ProductPricing price={product.price} />
        {product.extras && product.extras.length > 0 &&
          product.extras.map((extra, index) => (
            <div key={index} className='pt-3'>
              <div className='text-black text-[16px] font-bold mb-3'>{extra.title}</div>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {extra.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center whitespace-nowrap">
                    <input
                      type="checkbox"
                      id={`${extra.title}-${itemIndex}`}
                      className="mr-2 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor={`${extra.title}-${itemIndex}`} className="text-black">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
        <div className='text-black text-[16px] font-bold mt-3'>Special Instruction</div>
        <textarea placeholder='Food Allergy ? Need something put to the side? Let us know. (Additional charges may apply and not all changes are possible.)' className='scrollbar-hide bg-zinc-100 w-full mt-4 p-3 rounded-md text-black placeholder-gray-500 h-[130px]'></textarea>
        <div className="flex justify-center mt-4">
          <button 
          onClick={handleAddToCart}
          className="bg-orange-500 text-white w-full py-2 rounded-md font-bold">
            Add to cart
          </button>
        </div>
      </div>
      <div className='mt-7'>
        <div className='flex justify-center items-center'>
          <Link href="/">
            <Image src="/sams-logo.jpeg" width={160} height={59} alt="sams logo" />
          </Link>
        </div>

        <div>
          <h1 className={`text-black text-center mt-2 text-[30px] ${italianno.className}`}>Home Style Southern Cooking</h1>
        </div>

        <footer className="text-gray-800 py-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-xl font-semibold mb-4">Our Menus</h3>
              <ul className="space-y-2 text-sm ">
                <Link href='/'><li>PoBoys & Burgers</li></Link>
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
      </div>
    </section>
  )
}
