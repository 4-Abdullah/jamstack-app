"use client"  //To use Client Components 
// Import
import Image from 'next/image'
import Login_Page from '../../../public/Login_Page.jpg'
import  {useState} from 'react'
import axios from "axios"
import {useParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import toast from 'react-hot-toast';
import { Query } from 'pg'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { getURL } from 'next/dist/shared/lib/utils'
import Link from 'next/link'
import { clear } from 'console'


export default function Application({param}: any) {

    const router = useRouter()
    const searchParams = useSearchParams()
   // const oldemail= searchParams.get('email')
   // const newid=1;
    // const route = useRouter();
  
    // const name = useAuth().userId ?? "" ;
    //const id = ;
  // const {
  //   //  @ts-ignore
  //   query: { id },
  // } = router
  //  const [data, setData] = useState("")
    // To Logout 
    const logout = async () => {
        try {
            await axios.get('/api/Logout')
             toast.success('Logout successful')
            router.push('../')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    // Get user Details
  //   const getUserDetails = async () => {
  //     const res = await axios.get('/api/me')
  //     console.log(res.data);
  //     setData(res.data.data.id)
  // }

  const [user, setUser] = useState({
    
    email: '',   
    password: '', 
    mobilenumber:0,
    username:''
 });

// To show or hide password 
  const [showPassword, setShowPassword] = useState(false)
  const pressShow = (e:any) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }

// To handle Password validation on real time
const [Password,setPassword] = useState('')
const [errorP, setErrorP] = useState('');
const handlePasswordChange = (e:any) => {
  const newPassword = e.target.value;
  setPassword(newPassword);
  if(newPassword.length>0 && newPassword.length<8){
    setErrorP('Password atleast be 8 characters');
  }
  else{
      setErrorP('')
  }
}

// To handle Email validation on real time
const [Email,setEmail] = useState('')
const [errorE,setErrorE] = useState('')
const handleEmailChange = (e:any) =>{
const newEmail = e.target.value;
setEmail(newEmail);
if(newEmail.includes("@gmail.com")||newEmail.includes("@yahoo.com")||newEmail.includes("@hotmail.com")||newEmail.includes("@outlook.com")){
  setErrorE('');
  }
  else{
    setErrorE('Invalid Email');
  }
}

// To handle Username validation on real time 
 const [Username, setUsername] = useState('');
  const [errorU, setErrorU] = useState('');
  const handleUsernameChange = (e:any) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

  if(newUsername.length <6){
    setErrorU('Username atleast be 6');
  }
  else{
      setErrorU('');
  }
}

// To handle Mobilenumber validation on real time
const [Mobilenumber,setMobilenumber] = useState('')
const [errorM,setErrorM] = useState('')
const handleMobileNumberChange = (e:any) => {
    const newMobilenumber = e.target.value;
    setMobilenumber(newMobilenumber)

    if(newMobilenumber.length>0 && newMobilenumber.length<11){
      setErrorM('Mobilenumber should be 11 number');
    }
    else{
        setErrorM('')
    }
      
    // document.querySelectorAll('input[type="number"]').forEach(input => {
    // // @ts-ignore 
    //   input.oninput = () =>{
    //     // @ts-ignore 
    //      if(input.value.length>11)
    //        {
    //         // @ts-ignore 
    //         input.value= input.value.slice(0,11);
    //       }
    //     }
    // });
}


//  To handle Submit through api  
const handleSubmitEmail = async () => {
  
  
  const response = await fetch("/api/Application",
  {  
    method:"PUT",
    body:JSON.stringify({
      oldemail:searchParams.get('email'),
      email:user.email,
     
    })
  })
          console.log(response);
         // window.location.reload()
        
    }

//  To handle Submit through api 
const handleSubmitUsername = async () => {
  
  
      const response = await fetch("/api/Application",
      {  
        method:"PUT",
        body:JSON.stringify({
          email:searchParams.get('email'),
          username:user.username,
      
        })
      })
              console.log(response);
    
        }

//  To handle Submit through api 
const handleSubmitPassword = async () => {
  
  
  const response = await fetch("/api/Application",
  {  
    method:"PUT",
    body:JSON.stringify({
      email:searchParams.get('email'),
      password:user.password,
      
    })
  })
          console.log(response);

    }

//  To handle Submit through api 
const handleSubmitMobilenumber = async () => {
  
  
  
  const response = await fetch("/api/Application",
      {  
        method:"PUT",
        body:JSON.stringify({
          email:searchParams.get('email'),
          mobilenumber:user.mobilenumber,
      
        })
      })
          console.log(response);
          // if(response.ok){
          //   console.log("abc")
          // }
    }    

//   handle form submit
// const [Inputvalue,setInputvalue] = useState('')  

// const handleE = (e:any) =>{
//   e.preventDefault();
//  setInputvalue(user?.email);
//   return;
// }

const handle = (e:any) =>{
  e.preventDefault();
      return;
    }
  
  
return (
  <main>
    <Image src={Login_Page} alt='Login' fill/>
     <div className="absolute top-0 left-0 right-0 px-4 py-2 bg-gray-800 h-16 opacity-70">
           <p className="text-xl text-white text-center font-bold">Profile Management</p>
           <div>
          <h1>User Profile</h1>
          <p className="text-4xl">User Account: 
            <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{(searchParams.get('email')) }</span>
            </p>
        </div>
      </div>
      <div className='absolute right-5'>
        <button type='submit' onClick={logout} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
        
      </div>
      <div className="absolute  top-32 left-5"><p className="text-xl font-bold italic">Personal Information</p></div>
       <form action='' onSubmit={handle}  className="flex gap-8 absolute text-l w-58  h-50 top-60 left-5 font-italic">
	        <div className='flex flex-col relative'>
          <input required onChangeCapture={handleUsernameChange} value={user?.username}   onChange={(e) =>setUser({ ...user, [e.target.name]: e.target.value})}  className="p-2 text-black text-opacity-50 focus:text-black  w-64 h-12 rounded-lg" placeholder='Username' maxLength={13} name='username'  type='text'/>
            {errorU && <div className="text-xs">{errorU}</div>}
            </div>
          <button type='submit' onClick={handleSubmitUsername}  className="w-1/8 h-14 right-0  bg-indigo-600 hover:bg-indigo-700 text-slate-800 font-bold py-2 px-4 rounded-full">
            Change
          </button>
        </form>

        <form action='' onSubmit={handle}  className="flex  gap-8 absolute text-l w-58   h-50 top-60 right-80 font-italic">
        <div className='flex flex-col relative'>
          <input  required onChangeCapture={handleMobileNumberChange} value={user?.mobilenumber}  onChange={(e) =>setUser({ ...user,[e.target.name]:(e.target.value) })} className="p-2 text-black text-opacity-50 focus:text-black  w-64 h-12 rounded-lg" placeholder='Mobilenumber' maxLength={11}  name='mobilenumber' type='number'/>
            {errorM && <div className="text-xs">{errorM}</div>}
          </div>
          <button type='submit' onClick={handleSubmitMobilenumber} 
           className=" w-1/8 h-14 right-0  bg-indigo-600 hover:bg-indigo-700 text-slate-800 font-bold py-2 px-4 rounded-full">
            Change
          </button>
         
        </form>
       
        <form action='' onSubmit={handle}  className="flex gap-8  absolute text-l w-58 h-50 top-80 left-5  font-italic">
       
          <div className='flex flex-col relative'>
          <input required onChangeCapture={handleEmailChange} value={user?.email}  onChange={(e) =>setUser({ ...user, [e.target.name]: e.target.value})}   className="p-2 text-black text-opacity-50 focus:text-black  w-64 h-12 rounded-lg" placeholder='Email' name='email' type='email'/>
            {errorE &&<div className="text-xs">{errorE}</div>}
             </div>
           <Link href={{pathname:"/Application", query:{email:user.email}}}>
              <button type='submit'  onClick={handleSubmitEmail}  className=" w-1/8 h-14 right-0  bg-indigo-600 hover:bg-indigo-700 text-slate-800 font-bold py-2 px-4 rounded-full">
              Change
              </button>
           </Link>
        
        </form>
        
        <form action='' onSubmit={handle} className="flex  gap-8 absolute text-l w-58 h-50 top-80 right-80 font-italic">
        <div className='flex flex-col relative'>
            <input required onChangeCapture={handlePasswordChange} value={user?.password}  onChange={(e) =>setUser({ ...user, [e.target.name]: e.target.value})}  className="p-2 text-black text-opacity-50 focus:text-black  w-64 h-12 rounded-lg" placeholder="Password"  name='password' type={showPassword? "text":'password'}/>
             {errorP && <div className="text-xs">{errorP}</div>}
            </div>
              {showPassword? 
                <svg xmlns="http://www.w3.org/2000/svg" onClick={e => pressShow(e)} width="18" height="18" fill="indigo" className="absolute top-5 right-36 bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" onClick={e => pressShow(e)} width="18" height="18" fill="indigo" className="absolute top-5 right-36 bi bi-eye-slash" viewBox="0 0 16 16">
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
              }
            <button type='submit' onClick={handleSubmitPassword} className=" w-1/8 h-14 right-0  bg-indigo-600 hover:bg-indigo-700 text-slate-800 font-bold py-2 px-4 rounded-full">
              Change
            </button>
        </form>
      
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 h-16 bg-gray-800 opacity-70">
           <p className="text-xl text-white  font-bold">Welcome! To Application.</p>
            <p className=" text-sm text-gray-300">This is the Application Page.</p>
      </div>
  </main>
  )
}
