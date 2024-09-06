import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import photo from './d1.jpg'
import photo1 from './download.jpg'

export default function page() {
  return (
    <div className='w-[dvw] h-[dvh] flex flex-col items-center justify-normal'>
        <div>Gallery</div>
        <div className='flex flex-row items-center justify-around'>
            <Link href={"/gallery/1"}><Image alt='SCENE_1' src={photo} style={{marginRight:'100px'}}/></Link>
            <Link href={"/gallery/2"}><Image alt='SCENE_2' src={photo1} style={{marginRight:'100px'}}/></Link>
        
        </div>
    </div>
  )
}
