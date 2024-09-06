import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <div>
            Sub section
        </div>
        <Link href={"/dashboard/metrics"}> Metrics</Link>
    </div>
  )
}
