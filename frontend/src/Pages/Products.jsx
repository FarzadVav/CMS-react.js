import React from 'react'
import AddNewProduct from '../Components/AddNewProduct'
import ProductTable from '../Components/ProductTable'

function Products() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-9 mt-6'>
      <AddNewProduct />
      <ProductTable />
    </div>
  )
}

export default Products