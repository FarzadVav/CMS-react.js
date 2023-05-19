import React from 'react'

function DeleteModal({ showDeleteModal, closeDeleteModalHandler, deleteProductHandler }) {
  return (
    <div className={showDeleteModal ? 'bg-modal' : 'hidden'}>
      <div className='bg-white h-48 flex flex-col justify-center items-center gap-6 rounded-2xl p-9'>
        <h1 className='text-2xl text-slate-700'>آیا از حذف کردن اطمینان دارید؟</h1>
        <div className="w-full flex justify-center items-center gap-3">
          <button className='w-1/3 btn btn-out-danger'
            onClick={deleteProductHandler}>حذف شود</button>
          <button className='w-1/3 btn btn-out-blue'
            onClick={closeDeleteModalHandler}>لغو</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal