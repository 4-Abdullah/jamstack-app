'use client'

import { useSearchParams } from 'next/navigation'
import Data from './data';

export default function param(){
    const searchparams=useSearchParams();
const slug =searchparams.get('slug')
const user =searchparams.get('username')
console.log(slug,user)
return(<>
        <Data slug={slug} user={user}/>
        </>
)
}