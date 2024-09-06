import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        Dashboard | <Link href={"/"}> Home </Link>
    </div>
  )
}
