'use client'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

import { useSearchParams,useRouter } from 'next/navigation'

const Product =({attributes})=> {
  const router = useRouter()
const searchparams=useSearchParams();
const user=searchparams.get('username')

console.log(user)
const Buynow =()=>{
    
  if(user!=null){
      const destination=`/product/?slug=${attributes.slug}&username=${user}`
      router.push(destination)

  }
  else{
      const destination= `/product?slug=${attributes.slug}`
      router.push(destination) 
  
  }
  
}
 
    return (<>
      <div key={attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <CldImage  src={attributes.image.data.attributes.url} alt='image' width={500} height={400}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{attributes.category}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{attributes.title}</h2>
          <p className="leading-relaxed text-base"> {attributes.description}</p>
            <button onClick={Buynow} className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button>
        </div>
        </div>
    </>)
}
export default Product