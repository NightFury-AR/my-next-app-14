import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import photo from '../d1.jpg';
import photo2 from '../download.jpg';

export default function photopreview({params}:{params:{photoId:string}}) {
  return (
    <div className='flex items-center justify-center w-[dvw] h-[dvh] bg-black bg-opacity-50'>
        <div className='w-1/2 h-1/2 bg-white rounded-md p-4'>
            <div> Photo Preview  | <Link href={"/gallery"}> X </Link></div>

            {
                params.photoId === "1" ? <Image className='object-fill' alt='scene1' src={photo}/> : <Image src={photo2} alt='scene2'/>
            }
        </div>
    </div>
  )
}
