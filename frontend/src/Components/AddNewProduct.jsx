import React from 'react'

function AddNewProduct() {
  return (
    <div className='w-full flex flex-col gap-6'>
      <h1 className='text-slate-700 w-full text-3xl text-right sansbold'>ثبت محصول جدید</h1>
      <form action="#" className='w-full flex flex-col gap-3'>
        <div className="w-full flex justify-center items-center gap-3">
          <div className="w-1/3 flex justify-center items-center relative">
            <input type="text"
              className='text-blue-500 placeholder:text-blue-500 border-blue-500 ring-0 border
              w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
              placeholder='نام محصول' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 absolute left-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-1/3 flex justify-center items-center relative">
            <input type="text"
              className='text-blue-500 placeholder:text-blue-500 border-blue-500 ring-0 border
              w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
              placeholder='قیمت محصول' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 absolute left-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-1/3 flex justify-center items-center relative">
            <input type="text"
              className='text-blue-500 placeholder:text-blue-500 border-blue-500 ring-0 border
              w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
              placeholder='موجودی محصول' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 absolute left-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <div className="w-1/3 flex justify-center items-center relative">
            <input type="text"
              className='text-blue-500 placeholder:text-blue-500 border-blue-500 ring-0 border
              w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
              placeholder='تعداد رنگ بندی محصول' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 absolute left-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-1/3 flex justify-center items-center relative">
            <input type="text"
              className='text-blue-500 placeholder:text-blue-500 border-blue-500 ring-0 border
              w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
              placeholder='میزان محبوبیت محصول' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 absolute left-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="w-1/3 flex justify-center items-center relative">
            <input type="text"
              className='text-blue-500 placeholder:text-blue-500 border-blue-500 ring-0 border
              w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
              placeholder='میزان فروش محصول' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 absolute left-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <div className="w-1/2 flex justify-center items-center relative">
            <input type="text"
              className='text-blue-500 placeholder:text-blue-500 border-blue-500 ring-0 border
              w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
              placeholder='عکس محصول' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 absolute left-4 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <button type='submit' className='btn btn-out-success w-1/2'>
            اضافه کردن
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-0 w-6 h-6">
              <path className='duration-0' strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewProduct