import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div> 
        <div>metrics page</div>
        <Link href={'/dashboard'}> SUB PAGE </Link>
    </div>
  )
}
