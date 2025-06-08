'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Items from "./components/Items";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

export default function Home() {

    const [category, setCategory] = useState([]);
    const [error, SetError] = useState(null);
    const [banner, setBanner] = useState([]);

    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                await axios.get(`https://api.sams-eatery.com/menu`).then((res)=>{
                  setCategory(res.data);
                })
            }
            catch (err) {
                SetError("Menu is not available");
            }
        }

        const fetchBannerData = async () => {
          try {
              const res = await axios.get(`https://api.sams-eatery.com/banner`);
              setBanner(res.data.data);
          }
          catch (err) {
              SetError("Menu is not available");
          }
      }

      const fetchMenuProductsData = async () => {
        try {
            const res = await axios.get(`https://api.sams-eatery.com/menu/productsbymenu`);
            setProducts(res.data);
        }
        catch (err) {
            SetError("Menu is not available");
        }
    }
    fetchMenuProductsData();
    fetchBannerData();
    fetchMenuData();
    }, [])


  return (
    <div>
      <Navbar />
      <Category category={category} />
      <SearchBar />
      <Items products={products}/>
      <Footer />
    </div>
  );
}
