"use client"
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchBar() {

    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("https://api.sams-eatery.com/menu/productsbymenu");

            const allProducts = res.data.flatMap(category => category.products || []);

            setProducts(allProducts);
            setFilteredProducts(allProducts);
        };
        fetchProducts();
    }, [])

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = products.filter(item =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    return (
        <section className='w-full bg-white p-5'>
        <div className='mx-5 mt-3'>
            <input
                type='search'
                name='search'
                id='search'
                value={searchQuery}
                onChange={handleSearch}
                placeholder='Search food...'
                className='w-full border-none bg-orange-50 outline-none text-gray-500 py-2'></input>
        </div>


        <div className="mx-5 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {filteredProducts.map(item => (
    <Link key={item._id} href={`/menu/${item._id}`}>
    <div className="border rounded-md p-4 shadow-md overflow-hidden">
      <Image
        src={`https://api.sams-eatery.com/api/alluploads/${item.images[0]}`}
        alt={item.name}
        height={500}
        width={300}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2 text-zinc-800 truncate w-full">{item.name}</h2>
      <p className="text-sm text-gray-600 mt-1 break-words line-clamp-2">{item.description}</p>
      <p className="text-md font-semibold mt-2 text-zinc-800">${item.price}</p>
      <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
        Order Now
      </button>
    </div>
    </Link>
  ))}
</div>
    </section>
    )
}
