import React from 'react'
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      
    <div className='flex flex-col items-center justify-center h-screen bg-slate-400 border-black'>
      <div className='bg-black p-12 m-2 border-neutral-900 rounded-xl'>
      <h1 className='text-2xl text-center text-white font-serif font-bold p-4'>Data Fetching Application <br/> By Saba Zain</h1>
      <div className='grid gap-4'>
      <button className='bg-purple-600 hover:bg-red-400 hover:text-white border-black rounded-md p-2 text-[18px] font-serif font-bold'><Link href="Client-Side">Client Side Data Fetching </Link></button>
      <button className='bg-purple-600 hover:bg-red-400 hover:text-white border-black rounded-md p-2 text-[18px] font-serif font-bold'><Link href="Server-Side">Server Side Data Fetching</Link></button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default HomePage;
