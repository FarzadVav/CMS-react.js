import React, { useState } from 'react'

function DeleteModal({ showModal, closeModalHandler }) {
  return (
    <div className={`${showModal ? 'flex' : 'hidden'}
      bg-black bg-opacity-25 backdrop-blur-md w-screen h-screen
      justify-center items-center fixed top-0 left-0`}>
      <div className='bg-white h-48 flex flex-col justify-center items-center gap-6 rounded-2xl p-9'>
        <h1 className='text-2xl text-slate-700'>آیا از حذف کردن اطمینان دارید؟</h1>
        <div className="w-full flex justify-center items-center gap-3">
          <button className='w-1/3 btn btn-out-danger'>حذف شود</button>
          <button className='w-1/3 btn btn-out-blue'
            onClick={closeModalHandler}>لغو</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal