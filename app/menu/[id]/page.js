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
 
  const { id } = use(params);
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
    <section className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/cart" className="relative">
              <FaShoppingCart className="text-orange-500 text-2xl sm:text-3xl" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <div className="flex-1 flex justify-center">
              <Link href="/">
                <Image src="/sams.jpeg" width={160} height={59} alt="sams-logo" className="h-12 w-auto" />
              </Link>
            </div>
            <div className="w-8"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Product Image */}
        <div className="mb-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
            <Image
              src={productimage}
              width={600}
              height={400}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <ProductPricing price={product.price} />
          </div>

          {/* Extras Section */}
          {product.extras && product.extras.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Customize Your Order</h3>
              <div className="space-y-6">
                {product.extras.map((extra, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3 text-center">{extra.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {extra.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`${extra.title}-${itemIndex}`}
                            className="mr-3 h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <label htmlFor={`${extra.title}-${itemIndex}`} className="text-sm text-gray-700">
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Special Instructions</h3>
            <textarea 
              placeholder="Food Allergy? Need something put to the side? Let us know. (Additional charges may apply and not all changes are possible.)" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
              rows="4"
            />
          </div>

          {/* Add to Cart Button */}
          <div className="border-t border-gray-200 pt-6">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Logo and Tagline */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-block mb-4">
              <Image src="/sams-logo.jpeg" width={160} height={59} alt="sams logo" className="h-12 w-auto" />
            </Link>
            <h2 className={`text-2xl sm:text-3xl text-gray-900 ${italianno.className}`}>
              Home Style Southern Cooking
            </h2>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Menus</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-orange-500 transition-colors">PoBoys & Burgers</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Salads</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Seafood</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Chicken</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Cumbo</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Family Portions</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Appetizers</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Drinks</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Customer Review</Link></li>
                <li><Link href="/" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">📞</span>
                  <span>254 213 0758</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">✉️</span>
                  <span>killeenseafoodnmore@sams-eatery.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 mt-1">📍</span>
                  <span>201 E Rancier Ave, Killeen, TX 76541, United States</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <Image src="/card1.svg" width={36} height={23} alt="card-one" />
            <Image src="/card2.svg" width={36} height={23} alt="card-two" />
            <Image src="/card3.svg" width={36} height={23} alt="card-three" />
            <Image src="/card4.svg" width={36} height={23} alt="card-four" />
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <span>©2025 All rights reserved by </span>
            <Image src="/sams.jpeg" width={64} height={23} alt="sams-logo" className="inline-block ml-1" />
          </div>
        </div>
      </footer>
    </section>
  )
}
