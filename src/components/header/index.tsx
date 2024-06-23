
import { Suspense } from 'react';
import Navbar from './index2'
const Header =async ({searchparams,}:{searchparams:{slug:string|undefined ; username:string|undefined}}) => {
  
  console.log(searchparams)
  
  return(
        <>
        <Suspense>
        <Navbar/>
        </Suspense>
</>
    )
}
export default Header