import React from 'react'
import Image from 'next/image'
import photo from '../d1.jpg'
import photo1 from '../download.jpg'
import Link from 'next/link'

export default function page({params}:{params:{photoId:string}}) {
  return (
    <div className='w-[dvw] h-[dvh] flex flex-col items-center justify-center'>
        <div className='font-extrabold p-10 text-lg'>
            Photo PAGE {params.photoId} | <Link href={'/gallery'}> BACK TO GALLERY</Link>
        </div>
        {
            params.photoId === "1" ? <Image alt='photo' src={photo}/> : <Image alt='other' src={photo1}/>
        }
    </div>
  )
}
