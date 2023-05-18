import React, { useState } from 'react'

import AddNewProduct from '../Components/AddNewProduct'
import ProductTable from '../Components/ProductTable'
import DeleteModal from '../Components/DeleteModal'
import EditProductModal from '../Components/EditProductModal'

function Products() {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  function showDeleteModalHandler() {
    setShowDeleteModal(true)
  }

  function closeDeleteModalHandler() {
    setShowDeleteModal(false)
  }

  function showEditModalHandler() {
    setShowEditModal(true)
  }

  function closeEditModalHandler() {
    setShowEditModal(false)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center gap-9 mt-6 relative'>
      <AddNewProduct />
      <ProductTable
        showDeleteModalHandler={showDeleteModalHandler}
        showEditModalHandler={showEditModalHandler}
      />
      <DeleteModal showDeleteModal={showDeleteModal} closeDeleteModalHandler={closeDeleteModalHandler} />
      <EditProductModal showEditModal={showEditModal} closeEditModalHandler={closeEditModalHandler} />
    </div>
  )
}

export default Products