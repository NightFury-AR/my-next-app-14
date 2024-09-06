import React from 'react'

interface DashBoardType {

    children: React.ReactNode;
    main: React.ReactNode;
    sidenav: React.ReactNode;
    sub: React.ReactNode;
}

export default function DashboardLayout({children,main,sidenav,sub}: DashBoardType) {
  return (
    <div className='h-[dvh] w-[dvw] grid grid-cols-6 grid-rows-6 gap-2 p-1 bg-slate-100'>
        <div className='col-span-6 p-2 border rounded-md border-slate-600 flex'>{children}</div>
        <div className='row-span-5 row-start-2 p-2 border rounded-md border-slate-600'>{sidenav}</div>
        <div className='col-span-4 row-span-5 row-start-2 p-2 border-slate-600'>{main}</div>
        <div className='row-span-5 row-start-2 col-start-6 p-2 border rounded-md border-slate-600'>{sub}</div>
    </div>
  )
}
