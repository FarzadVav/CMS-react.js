import React, { useState } from 'react'

import AddNewProduct from '../Components/AddNewProduct'
import ProductTable from '../Components/ProductTable'

function Products() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-9 mt-6 relative'>
      <h1 className='title'>ثبت محصول جدید</h1>
      <AddNewProduct />
      <h1 className='title'>لیست محصولات</h1>
      <ProductTable />
    </div>
  )
}

export default Products