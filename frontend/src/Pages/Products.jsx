import React, { useState } from 'react'

import AddNewProduct from '../Components/AddNewProduct'
import ProductTable from '../Components/ProductTable'

function Products() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-9 mt-6 relative'>
      <AddNewProduct />
      <ProductTable />
    </div>
  )
}

export default Products