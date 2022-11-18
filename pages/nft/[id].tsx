import React from 'react'
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
function NFTDropPage() {

    //Auth
    const address = useAddress();
   
    //--
  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'> 
        {/* left */}
     <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
        <div className='flex flex-col items-center justify-center py2 lg:min-h-screen'>
        <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
<img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="/pand.png" alt="hehe" /></div>
<div className='text-xenter p-5 space-y-2'>
    <h1 className='text-4xl font-bold text-white '>TigerFangPanda</h1>
<h2 className='text-xl text-gray-300'>For people whose soul animal is combination of panda and tiger</h2></div>

     </div>
     </div>
        
        {/* right */}
        
        
        <div className='flex flex-1 flex-col p-12 lg:col-span-6'>  

{/* header */}
<header className='flex items-center justify-between'>
    <h1 className='h-52 cursor-pointer text-xl font-extralight sm:w-80'> 
    <span  className='font-extrabold underline decoration-pink-600/50'> Tiger Fang Panda </span>
     marketplace where you can trade your soul in form of nft</h1>
    {/* <button onClick={()=>connectWithMetamask()}  className='rounded-full bg-rose-400 px-4 py-2 text-xs text-white font-bold lg:px-5 lg:py-3 lg:text-base'> signin </button>
    <ConnectWallet className=' accentColor="red" rounded-full bg-rose-400 px-4 py-2 text-xs text-red font-bold lg:px-5 lg:py-3 lg:text-base' /> */}
    <ConnectWallet
 
  
  // Ask users to sign in using auth after connecting their wallet
  auth={{
    loginOptional: false,
  }}
/>

</header>
<hr  className='my-2 border'/>
{/* content */}
<hr />
{
    address &&<p>you're logged in with wallet {address.substring(0,5)}....{address.substring(address.length-5)}</p>
}

<div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>

    <img className=' w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="hola" />
<h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>Frank's coding club |NFT Create</h1>
<p className='pt-2 text-xl text-green-500'>12/21 nft's claimes</p>

</div>
{/* Mint button */}
<button className='h-16 w-full font-bold bg-red-600 text-white rounded-full'>Mint NFT(0.01 ETH)</button>
        </div>
        </div>
  )
}

export default NFTDropPage