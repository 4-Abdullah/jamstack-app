
// import axios from 'axios'
import Productdetails from './productdetails'
import Data from './data'
import Param from './param'
import { Suspense } from 'react'
const Slug =async ({searchparams}:{searchparams:{slug:any;username:any}}) => {
 
  console.log(searchparams)
 
  return(
        <>
        <Suspense>
        <Param />
        </Suspense>
        
</>
    )
}
export default Slug