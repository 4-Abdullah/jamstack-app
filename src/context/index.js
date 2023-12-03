'use client'
import '../app/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'
import React, { createContext,useContext, useState, useEffect } from 'react';


export const GlobalContext = createContext(null);


const GlobalState=({children})=>{
  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
  </Head>
useEffect(() => {
    console.log("I am useeffect from app.js")
  }, [])

  const [cart, setCart] = useState([])
  const [reloadKey, setReloadKey] = useState(1)
 
  const addToCart = (item, qty, price) => {
    console.log("Add to cart")
    let newCart = cart
    for (let index = 0; index < qty; index++) {
      
      newCart.push([item, price])
    }
    console.log("Add to cart", newCart)
    setCart(newCart)
    setReloadKey(Math.random())
  }

  const removeFromCart = (item, qty) => {
    let newCart = cart
    
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }

  const clearCart = (item) => {
    setCart([])
  }

  return( 
  <GlobalContext.Provider value={{cart:{cart}, removeFromCart:{removeFromCart}, addToCart: { addToCart }, clearCart:{clearCart}}}>
  {children}
  </GlobalContext.Provider>
   
  )
}
export default GlobalState



const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

const fetchProducts=async()=>{
  try {
    let headers = { Authorization: `Bearer ${process.env.API_TOKEN}` };
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?populate=*`,
      { headers: headers }
    );
    let productsData = await response.json();
    setProducts(productsData);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

useEffect(() => {
  fetchProducts();
}, []);

return (
  <ProductContext.Provider value={{ products, fetchProducts }}>
    {children}
  </ProductContext.Provider>
);
};
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};