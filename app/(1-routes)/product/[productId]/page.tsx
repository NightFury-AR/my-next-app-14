import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'

interface ProductProps {
    params: {
        productId: string
    }
}

export const generateMetaData = ({params} : ProductProps): Metadata => {
    const {productId} = params;

    return {
        title: `Product - ${productId}`,
        description: `Product details for product -${productId}`,
        openGraph: {
            title: `Product - ${productId}`,
            description: `Product details for product -${productId}`
        }
    }
}

export default function page({params}:{params:{productId:string}}) {
  return (
    <div className='flex p-24'>
        {
            Number.parseInt(params.productId) > 5 ? notFound() : <div className='p-3'> Product - {params.productId} <br/> <Link href={'/product'}>PRODUCTS PAGE </Link></div>
        }
    </div>
  )
}
