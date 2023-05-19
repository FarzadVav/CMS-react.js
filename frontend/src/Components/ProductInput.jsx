import React, { useEffect, useState } from 'react'

function ProductInput({ width, placeholder, inputRef, svg }) {
  return (
    <div className={`${width || 'w-1/3'} flex justify-center items-center relative`}>
      <input
        type="text"
        className='text-blue-500 placeholder:text-blue-400 border-blue-500 ring-0 border
        w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
        placeholder={placeholder} ref={inputRef}
      />
      {svg}
    </div>
  )
}

export default ProductInput