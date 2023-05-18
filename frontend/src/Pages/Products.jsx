import React, {useState} from 'react'
import AddNewProduct from '../Components/AddNewProduct'
import ProductTable from '../Components/ProductTable'
import DeleteModal from '../Components/DeleteModal'

function Products() {
  const [showModal, setShowModal] = useState(false)

  function showModalHandler() {
    setShowModal(true)
  }

  function closeModalHandler() {
    setShowModal(false)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center gap-9 mt-6 relative'>
      <AddNewProduct />
      <ProductTable showModalHandler={showModalHandler} />
      <DeleteModal showModal={showModal} closeModalHandler={closeModalHandler} />
    </div>
  )
}

export default Products