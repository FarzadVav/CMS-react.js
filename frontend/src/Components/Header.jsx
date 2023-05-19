import React from 'react'

function Header() {
  return (
    <div className='bg-blue-100 w-full flex justify-between items-center px-5 py-3 rounded-2xl'>
      <div className="flex justify-center items-center gap-3">
        <img className='w-10 h-10 rounded-full ring-2 ring-offset-1 ring-green-300'
          src="https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp"/>
        <span>فرزاد وحدتی نژاد - FarzadVav</span>
      </div>
      <div className="flex justify-center items-center gap-3 rounded-2xl">
        <span className='flex justify-center items-center gap-2 cursor-pointer group'>
          <span>24</span>
          پیام خوانده نشده
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:rotate-180 group-hover:scale-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        <div className="bg-yellow-200 w-10 h-10 flex justify-center items-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-yellow-600 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header