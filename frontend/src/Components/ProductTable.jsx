import React, { useEffect, useState } from 'react'

import DeleteModal from '../Components/DeleteModal'
import EditProductModal from '../Components/EditProductModal'
import { getAllProducts, deleteProduct } from '../utility/connections'

function ProductTable({ showDeleteModalHandler, showEditModalHandler }) {
  const [allProducts, setAllProducts] = useState([])

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [productId, setProductId] = useState(null)

  const [selectProduct, setSelectProduct] = useState([])

  useEffect(() => {
    getAndSetAllProducts()
  }, [])

  function getAndSetAllProducts() {
    getAllProducts()
      .then(res => setAllProducts(res))
  }

  function showDeleteModalHandler() {
    setShowDeleteModal(true)
  }

  function closeDeleteModalHandler() {
    setShowDeleteModal(false)
  }

  function showEditModalHandler(id) {
    setShowEditModal(true)
    const filteredProduct = allProducts.filter(product => product.id === id);
    setSelectProduct(filteredProduct)
  }

  function closeEditModalHandler() {
    setShowEditModal(false)
  }

  function deleteProductHandler() {
    deleteProduct(productId).then(() => {
      setShowDeleteModal(false)
      getAndSetAllProducts()
    })
  }

  return (
    <>
      <table className='w-full'>
        <thead className='bg-slate-200 text-slate-700 w-full flex items-center p-3 rounded-t-2xl'>
          <tr className='w-2/12'>
            <th className='font-light'>عکس محصول</th>
          </tr>
          <tr className='w-3/12'>
            <th className='font-light'>اسم</th>
          </tr>
          <tr className='w-2/12'>
            <th className='font-light'>قیمت</th>
          </tr>
          <tr className='w-2/12'>
            <th className='font-light'>موجودی</th>
          </tr>
          <tr className='w-3/12 flex justify-center'>
            <th className='font-light'>عملیات</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {
            allProducts.map(product => (
              <tr key={product.id} className='w-full flex items-center p-3 border-b border-slate-200'>
                <td className='w-2/12 font-light'>
                  <img className='w-10 h-10 rounded-full shadow-sm shadow-[#00000015]
                  cursor-zoom-in duration-100 hover:scale-[3] hover:-translate-x-7'
                    src={product.img} />
                </td>
                <td className='w-3/12 font-light'>{product.title}</td>
                <td className='w-2/12 font-light'>{product.price} تومان</td>
                <td className='w-2/12 font-light'>{product.count} عدد</td>
                <td className='w-3/12 flex justify-center items-center gap-6'>
                  <div className='border border-slate-500 text-slate-500 w-10 h-10 rounded-full
                  flex justify-center items-center
                  cursor-pointer hover:bg-slate-500 hover:text-white hover:ring-4 hover:ring-slate-200'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-0 w-6 h-6">
                      <path className='duration-0' strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </div>
                  <div className='border border-blue-500 text-blue-500 w-10 h-10 rounded-full
                    flex justify-center items-center
                    cursor-pointer hover:bg-blue-500 hover:text-white hover:ring-4 hover:ring-blue-200'
                    onClick={() => showEditModalHandler(product.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-0 w-5 h-5">
                      <path className='duration-0' strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </div>
                  <div className='border border-red-500 text-red-500 w-10 h-10 rounded-full
                    flex justify-center items-center
                    cursor-pointer hover:bg-red-500 hover:text-white hover:ring-4 hover:ring-red-200'
                    onClick={() => {
                      showDeleteModalHandler()
                      setProductId(product.id)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duration-0 w-6 h-6">
                      <path className="duration-0" strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <DeleteModal
        showDeleteModal={showDeleteModal}
        closeDeleteModalHandler={closeDeleteModalHandler}
        deleteProductHandler={deleteProductHandler}
      />

      {
        selectProduct.length > 0 && (
          <EditProductModal
            productDetails={selectProduct}
            showEditModal={showEditModal}
            closeEditModalHandler={closeEditModalHandler}
          />
        )
      }
    </>
  )
}

export default ProductTable