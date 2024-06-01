
import React, { cache } from 'react'

import Product from './product'

const  HomePage = async() => {
  const data = await fetch('http://127.0.0.1:1337/api/products?populate=*',{cache:'no-store'});
  console.log(data.data)
  const products = await data.json()
  console.log(products)
 
  if (!data) return <div>Loading...</div>;

  return (

          <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 md:py-24 mx-auto">
    <div className="flex flex-wrap w-full md:mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="text-2xl font-medium title-font mb-2 text-gray-500">Product List</h1>
      </div> 
    </div>
    <div className="flex flex-wrap -m-4">
    
    {products.data.map( p =>
       <Product key={p.id} {...p}/>)}
  
    </div>
    </div>
</section>
    </div>
  );
};

export default HomePage;