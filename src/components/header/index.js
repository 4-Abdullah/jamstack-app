'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
const header = () => {
  return (
    <div><header className="text-gray-600 body-font">
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   <Link href="/"><div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image className="w-8" src={logo} alt="" />
        <span className="ml-3 text-xl">MyShop</span>
      </div></Link>
       <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/"><div className="mr-5 hover:text-gray-900">Home</div></Link>
        <Link href="/about"><div className="mr-5 hover:text-gray-900">About</div></Link>
        <Link href="/products"><div className="mr-5 hover:text-gray-900">Products</div></Link>
        <Link href="/contact"><div className="mr-5 hover:text-gray-900">Contact Us</div></Link>
        {/* <Link href="/checkout"><div className="mr-5 hover:text-gray-900">Cart({cart.length})</div></Link> */}
      </nav>
      <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Login</button>
    </div>
  </header></div>
  )
}

export default header