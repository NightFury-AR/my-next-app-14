'use client'
import React from 'react'

export default function ErrorBoundary({error}:{error:Error}) {
    <div className='w-[dvw] h-[dvh] flex flex-col items-center justify-center'>
        error: {error.message}
    </div>
}

