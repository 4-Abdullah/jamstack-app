 "use client"
// import axios from "axios";
// import Productdetails from "./productdetails";

// const Data=async({
//   slug,user
// })=> {
// // const increaseCartQuantity=async(e)=>{
// //     const data1 = await axios.get(`http://127.0.0.1:1337/api/carts?populate=*&filters[$and][0][user][username][$eq]=${user}`);
// //     console.log(data1)
// //     const getid=data1.data.id
// //     // const res = await axios.get("http://localhost:1337/api/carts")
// //     // console.log(res)
// //     // const max=res.meta.pagination.total
// //     console.log(getid)
// //     const data = await axios.put(`http://localhost:1337/api/carts/${getid}`,{
// //       "data":{
// //         "products":{"connect":[e]}
// //      }
// //     })
    
// //   }
       
      
//               const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
//               const data = await fetch(`${apiUrl}/api/products?filters[slug]=${slug}&populate=*`,{ cache: 'no-store' });
      
//               if (!data.ok) {
//                 throw new Error('Failed to fetch product data');
//               }
      
//               // console.log(data)
//               const products = await data.json()
//               console.log(products) // Assuming the product is the first item in the array

//   return (
//     <div>
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           {products.data.map(p => <Productdetails key={p.id} {...p} />)}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Data;

import React, { useEffect, useState } from 'react';
import Productdetails from './productdetails';

const Data = async({ slug, user }) => {
  
  
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
        const data = await fetch(`${apiUrl}/api/products?filters[slug]=${slug}&populate=*`);

        if (!data.ok) {
          throw new Error('Failed to fetch product data');
        }


  const products = await data.json()
                console.log(products) // Assuming the product is the first item in the array
  async function fetchData() {
  try {
    const response = await fetch(`${apiUrl}/api/products?filters[slug]=${slug}&populate=*`, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {products.data.map(p => <Productdetails key={p.id} {...p} />)}
        </div>
      </section>
    </div>
  );
}

// fetchData();
    return (
      fetchData()
    );
  };
export default Data;

