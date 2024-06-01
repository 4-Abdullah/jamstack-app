
import { Suspense } from 'react';
import Head from './index2'
const Header =async ({searchparams,}:{searchparams:{slug:string|undefined ; username:string|undefined}}) => {
  
  console.log(searchparams)
  
  return(
        <>
        <Suspense>
        <Head/>
        </Suspense>
</>
    )
}
export default Header