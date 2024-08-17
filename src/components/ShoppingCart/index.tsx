
import Cartitem from "../cartitem/index";
export default async function data({
  slug,user
}: {
  slug: string | undefined;user:string|undefined
}) {
  
  // const data = await fetch(`http://127.0.0.1:1337/api/products?filters[slug]=${slug}`,{ cache: 'no-store' });
console.log(user,slug)
  const data = await fetch(`http://127.0.0.1:1337/api/carts?populate=*&filters[$and][0][user][username][$eq]=${user}`);
    console.log(data)
    const products = await data.json()
    console.log(products)
    return(
            //  {products.data.map((p: { id: any} ) => <Productdetails key={p.id} {...p} />)} 
             <div>
             <section className="text-gray-600 body-font overflow-hidden">
               <div className="container px-5 py-24 mx-auto">
                 {products.data.map((p: { id:any} ) => <Cartitem key={p.id} {...p} />)}
       
                 {/* {products:products} */}
               </div>
             </section>
           </div>
    )
}
