import React from 'react'

function EditProductModal({ showEditModal, closeEditModalHandler }) {
  return (
    <div className={showEditModal ? 'bg-modal' : 'hidden'}>
      <div className='bg-white h-48 flex flex-col justify-center items-center gap-6 rounded-2xl p-9'>
        <div className="w-full flex justify-center items-center relative">
          <input type="text"
            className='text-blue-500 placeholder:text-blue-500 border-blue-500 ring-0 border
              w-full px-5 pl-12 py-2.5 rounded-full focus:outline-0 focus:ring-4 focus:ring-blue-200'
            placeholder='نام محصول' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 absolute left-4 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="w-full flex justify-center items-center gap-3">
          <button className='w-1/2 btn btn-out-success justify-center'>ثبت اطلاعات</button>
          <button className='w-1/2 btn btn-out-blue justify-center'
            onClick={closeEditModalHandler}>لغو</button>
        </div>
      </div>
    </div>
  )
}

export default EditProductModal