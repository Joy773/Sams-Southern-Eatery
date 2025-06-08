'use client'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import React from 'react'
export default function page() {
  const cartItems = useSelector(state => state.cart.items)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <Image
                src={`https://api.sams-eatery.com/api/alluploads/${item.image}`}
                width={100}
                height={100}
                alt={item.name}
                className="rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
