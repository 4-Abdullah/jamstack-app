'use client'
import React, { Children, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import {useRouter} from 'next/navigation'
import Data from '../ShoppingCart/index'

const Navbar=()=>{

  const searchparams=useSearchParams();

const slug =searchparams.get('slug')
console.log(slug)
    const user=searchparams.get('username')
    console.log(user);

    const [buttonText, setButtonText] = useState('');
    const router = useRouter()

    useEffect(() => {
      setButtonText(user ? 'Logout' : 'Login');
    }, [user]);


  const Home =(e)=>{
    
    if(user!=null){
        const destination=`/?username=${user}`
        router.push(destination)
    }
    else{
        const destination= `/`
        router.push(destination) 
    }
  }

  const Cart =(e)=>{
    
    if(user!=null){
        const destination=`/checkout/?username=${user}`
        router.push(destination)
    }
    else{
        const destination= `/checkout`
        router.push(destination) 
    }
  }

  const Products =(e)=>{
    
    if(user!=null){
        const destination=`/products?username=${user}`
        router.push(destination)
    }
    else{
        const destination= `/products`
        router.push(destination) 
    }
  }

  const handle =(e)=>{
    
    if(user!=null){
        const destination=`/Application?username=${user}`
        router.push(destination)
    }
    else{
        const destination= `/Login`
        router.push(destination) 
    }
  }


  return (
    <div><header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/"><div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
        <span className="ml-3 text-xl text-white">MyShop</span>
      </div></Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <button className="mr-5 hover:text-gray-900" onClick={Home}>Home</button>
        <button className="mr-5 hover:text-gray-900" onClick={Products}>Products</button>
    
        <button className="btn btn-primary bg-gray-900" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="rounded-full absolute w-5 h-5 text-sm bg-black  d-flex justify-content-center align-items-center">
                
          
            </div>
          </button>
  <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Cart</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
  </div>
  <div className="offcanvas-body">
    <Data slug={slug} user={user}/>
  </div>

</div>
    
        </nav>
      <button onClick={handle} className="my-2  h-12 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded-full text-sm">{buttonText}</button>
    </div>
  </header></div>
      
  )
}
export default Navbar