import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <div> PRODUCTS </div>
        <div className='flex flex-row space-x-3'>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/product/1"}> Product-1 </Link></div>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/product/2"}> Product-2 </Link></div>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/product/3"}> Product-3 </Link></div>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/product"}> Products </Link></div>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/"}> Home </Link></div>
        </div>
    </div>
  )
}
