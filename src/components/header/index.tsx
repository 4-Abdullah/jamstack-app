
import { Suspense } from 'react';
import Navbar from './index2'
const Header =async () => {
  
  return(
        <>
        <Suspense>
        <Navbar/>
        </Suspense>
</>
    )
}
export default Header