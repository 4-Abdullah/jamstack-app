import axios from "axios";
import Productdetails from "./productdetails";

const data=async({
  slug,user
}: {
  slug: string | undefined;user: string | undefined 
})=> {
// const increaseCartQuantity=async(e)=>{
//     const data1 = await axios.get(`http://127.0.0.1:1337/api/carts?populate=*&filters[$and][0][user][username][$eq]=${user}`);
//     console.log(data1)
//     const getid=data1.data.id
//     // const res = await axios.get("http://localhost:1337/api/carts")
//     // console.log(res)
//     // const max=res.meta.pagination.total
//     console.log(getid)
//     const data = await axios.put(`http://localhost:1337/api/carts/${getid}`,{
//       "data":{
//         "products":{"connect":[e]}
//      }
//     })
    
//   }
const data = await fetch('http://127.0.0.1:1337/api/products?filters[slug]='+slug+'&populate=*');
  console.log(data)
  const products = await data.json()
  console.log(products)
  return(
           <div>
           <section className="text-gray-600 body-font overflow-hidden">
             <div className="container px-5 py-24 mx-auto">
               {products.data.map((p: { id: any} ) => <Productdetails key={p.id} {...p} />)}
     
             </div>
           </section>
         </div>
  )
}
export default data