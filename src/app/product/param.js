'use client'

import { useSearchParams } from 'next/navigation'
import Data from './data';
import { Suspense } from 'react';

const Param=()=>{
    const searchparams=useSearchParams();
const slug =searchparams.get('slug')
const user =searchparams.get('username')
console.log(slug,user)
return(<>
        <Suspense>
        <Data slug={slug} user={user}/>
        </Suspense>
        </>
)
}
export default Param