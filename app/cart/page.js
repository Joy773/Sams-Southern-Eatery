'use client'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../features/shopCart/cartSlice'
import Image from 'next/image'
import React from 'react'
export default function page() {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const handleIncrease = (id, currentQty) => {
    dispatch(updateQuantity({id, quantity: currentQty + 1}))
  }
  const handleDecrease = (id, currentQty) => {
    if (currentQty > 1){
      dispatch(updateQuantity({id, quantity: currentQty - 1}))
    }
  }
  const handleRemove = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      {cartItems.length === 0 ? (

        <div className='flex items-center justify-center h-screen'>Your cart is empty</div>
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
                <div className='flex items-center mt-2 space-x-2'>
                  <button
                  onClick={() => handleDecrease(item.id, item.quantity)}
                  className='px-2 py-1 bg-orange-600 rounded text-lg font-bold'
                  disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className='px-2'>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id, item.quantity)} className='px-2 py-1 bg-orange-600 rounded text-lg font-bold'>+</button>
                  <button onClick={() => handleRemove(item.id)} className='ml-4 text-white bg-orange-600 rounded-sm p-2'>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
