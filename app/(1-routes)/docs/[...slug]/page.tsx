import Link from 'next/link'
import React from 'react'

export default function page({params}:{params:{slug:string}}) {
  return (
    <div>
            <div className='text-purple-800 font-extrabold'>DOCUMENTATION</div>
            <div className='p-4 bg-slate-200 flex flex-row items-start'>
                <div className='mx-2 hover:bg-slate-400 p-2'><Link href={'/docs'}>Docs Home </Link></div>
            </div>
            <div> section {params.slug[0]} | {params.slug[1]}</div>
    </div>
    
  )
}
