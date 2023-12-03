'use client'
// import Image from "next/image"
import { CldImage } from 'next-cloudinary';
export default ({attributes}) => {
    return (<>
        {/* <h3>{id}</h3>
        {/* <p>{id}</p> */}
        {/* <p>{attributes.slug}</p>
        <p>{attributes.description}</p>
        <p>{attributes.category}</p>
        <p>{attributes.size}</p>
        <p>{attributes.color}</p>  */}
         
      <div key={attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <CldImage src={attributes.image.data.attributes.url} alt='image' width={500} height={400}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{attributes.category}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{attributes.title}</h2>
          <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
          <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${attributes.color}-800`}></button>
          <p className="leading-relaxed text-base"> {attributes.description}</p>
          {/* <Link href={Buynow}> */}
            <button  className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button>
            {/* </Link> */}
        </div>
        </div>
      {/* ) */}
    {/* })} */}
    </>)
}