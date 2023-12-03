import Link from 'next/link'
import React, { cache } from 'react'
import ProductContext from '../../context/index'
import header from '@/components/header'
import Image from 'next/image'
import { HeadersAdapter } from 'next/dist/server/web/spec-extension/adapters/headers'
import { Port_Lligat_Sans } from 'next/font/google'
// async function getData() {
//   let headers = {Authorization: `Bearer 8abbbcb4ff284a8d4627270e9404a220ac42ea847c9d4cd40264fef874347a2b7b09cbe923c50bd79ea4caeda511a8f3481f1db39d1cafe9192b84ea0fd2d5d69f0c29a757a4d70c42cc65492c47ece31fbdd337031736ac06802e77b80c1610b0910f7d1ec7f1b7a8a95d56f584a28dda2b3c6bbacba7dce6a4a2e3421d58eb`}
//   const res = await fetch("http://localhost:1337/api/products", {headers, cache: 'no-store' })
//   let products = await res.json() 
  
//   //const res = await fetch('https://api.example.com/...')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
//   return {
//     props: {products: products},
//   }
// //  return res.json()
// }


// export const getProducts =  async()=> {

//   const headers = {Authorization: `Bearer 8abbbcb4ff284a8d4627270e9404a220ac42ea847c9d4cd40264fef874347a2b7b09cbe923c50bd79ea4caeda511a8f3481f1db39d1cafe9192b84ea0fd2d5d69f0c29a757a4d70c42cc65492c47ece31fbdd337031736ac06802e77b80c1610b0910f7d1ec7f1b7a8a95d56f584a28dda2b3c6bbacba7dce6a4a2e3421d58eb`}
//   // const res = await fetch(`https://localhost:1337/api/products?populate=*`)
//   // console.log("res",res);
//   // const res = await fetch('https://dummyjson.com/quotes',{cache:'no-store'})
//   const data=await res.json()
//   return data
// }

// const Products= async()=> {
//   // const Products = async (props) =>{
//   const data = await getProducts()
//   // console.log(data);
//   // const products = await getProducts()
//   return (
//     <div className='container mx-auto px-4'>
//       <section >
//         <div>Abdullah</div>
//         {/* {quotes.data.map(()=>(
               
//       <div key={quotes.id}><div>{quotes.name}</div></div>
         
//       ))} */}
//        {/* <h1>Trending Products</h1>
//       {data.map((item) => (
//         <article key={item.id}>
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//         </article>
//       ))} */}
//        {products.products.data.map((item)=>{
//         return (
//       <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//         {/* <Gallery
//                       key={detail.id}
//                       thumbnailUrl={detail.attributes.img.data.attributes.formats.thumbnail.url}
//                       title={detail.attributes.name}
//                       id={detail.id}
//                     /> */}
//         <Image src={item.attributes.image.data.attributes.url} width={500} height={400}/>
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
//           <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
//           <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
//           <p className="leading-relaxed text-base"> {item.attributes.description}</p>
//           <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
//         </div>
//       </div>
//       )
//     })}
//   <div className="container px-5 md:py-24 mx-auto">
//     <div className="flex flex-wrap w-full md:mb-20">
//       <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
//         <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        
//       </div> 
//     </div>
//     <div className="flex flex-wrap -m-4">
   
//       {/* {props.products.data.map((item)=>{ */}
//         {/* return ( */}
//       {/* <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <img className="h-96 rounded m-auto mb-8" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content"/>
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
//           <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
//           <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
//           <p className="leading-relaxed text-base"> {item.attributes.description}</p>
//           <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
//         </div>
//       </div> */}
//       {/* ) */}
//     {/* })} */}
//     <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap w-full mb-20">
//       <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
//         <div className="h-1 w-20 bg-indigo-500 rounded"></div>
//       </div>
//       <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
//     </div>
//     <div className="flex flex-wrap -m-4">
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <img className="h-40 w-full rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//           <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }
// export default Products

// const Home = () => {
//   const [products, setProducts] = useState();

//   const getProducts = async() => {
//     const res = await fetch("http://localhost:1337/api/products?populate=*");
//     const json = await res.json();
//     setProducts(json);
//   }

//   if(!products){
//     getProducts();
//   }

//   return (
//     <div>
//       {products.data.map((item) => (
//         <div key={products.id}>
//             <h2>{products.id}</h2>
//         </div>
//       )) 
//       }
//     </div>
//   )
// }

// // export default Home;
// import Article from "./article"
import Product from './product'
// import Quote from './quote'
// // const api = 'https://jsonplaceholder.typicode.com/posts'
// const api = 'https://localhost:1337/api/products?populate=*'
// //  const api ='https://dummyjson.com/quotes'
// const loadDataFromServer = async ()=> {
//     const response = await fetch(api, { cache: 'no-store' })
//     return response.json()
// }


// export default async () => {
//     const products = await loadDataFromServer()
    // const quotes = await loadDataFromServer()

    // const pro = {
    //     title: products.data.id.attributes.title,
    //     color: products.data.id.attributes.color,
    //     description: products.data.id.attributes.description
    // } 
    // const articles = await loadDataFromServer()
    // return (<>
    //     <h1>My blog</h1>
    //     {articles.map( p => <Article key={p.id} {...p}/>)}
    // </>)
  //   return (<>
  //     <h1>My blog</h1>
      
  //     {products.products.data.map( p => <Product key={p.id} {...p}/>)}
  // </>)
// return (<>
//          <h1>My blog</h1>
//          {quotes.quotes.map( p => <Quote key={p.id} {...p}/>)}
//      </>)
// }

import useSWR from 'swr';
import axios from 'axios';
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

// const fetcher = (url) => axios.get(url).then((res) => res.data);

  //     const response = await fetch(api, { cache: 'no-store' })
  //     return response.json()
  // }
const  HomePage = async() => {
  const data = await fetch('http://127.0.0.1:1337/api/products?populate=*',{cache:'no-store'});
  console.log(data.data)
  const products = await data.json()
  console.log(products)
  // if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  return (

          <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 md:py-24 mx-auto">
    <div className="flex flex-wrap w-full md:mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div> 
    </div>
    <div className="flex flex-wrap -m-4">
    {products.data.map( p => <Product key={p.id} {...p}/>)}
      {/* {products.data.map((item) => (
         <div key={item.id}>
           <h2>{item.title}</h2>
           <p>{item.description}</p>
         </div>
       ))} */}
       {/* {products.data.map((item)=>{
        return (
      <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <Image src={item.attributes.image.data.attributes.url} alt='image' width={500} height={400}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
          <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
          <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
          <p className="leading-relaxed text-base"> {item.attributes.description}</p>
          <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
        </div>
      </div>
      )
    })}  */}
    </div>
    </div>
</section>
    </div>
  );
};

export default HomePage;