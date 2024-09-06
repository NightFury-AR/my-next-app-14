import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col w-full p-24'>
        <div className='text-purple-800 font-semibold mx-3'>DOCS</div>
        <div className='p-4 flex flex-row items-start bg-slate-200'>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/docs"}>Docs</Link></div>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/docs/features"}>Features</Link></div>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/docs/sections/1/2"}>Sections</Link></div>
            <div className='mx-2 hover:bg-slate-400 p-2'><Link href={"/"}>HOME</Link></div>
        </div>
    </div>
  )
}
