import Image from "next/image"
import eshop from '../../public/eshop-homepage.jpeg'
export default function Home(){
  
  return (
    <div className='container mx-auto px-4'>
      <Image src={eshop} alt='Login'/>
    </div>
  )
}
