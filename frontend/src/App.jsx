import React from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routes'
import SideBar from './Components/SideBar'
import Header from './Components/Header'

export default function App() {
  const router = useRoutes(routes)

  return (
    <div className="bg-blue-500 w-screen h-screen flex gap-3 p-3">
      <div className="w-2/12 h-full">
        {<SideBar />}
      </div>
      <div className="bg-white w-10/12 h-full flex flex-col gap-3 p-6 rounded-3xl overflow-y-scroll" id='body-dashboard'>
        {<Header />}
        {router}
      </div>
    </div>
  )
}