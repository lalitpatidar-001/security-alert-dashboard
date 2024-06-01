import React from 'react'
import {Outlet} from "react-router-dom"
import Sidebar from '../components/Sidebar'
const HomeLayout = () => {
  return (
    <div className="flex gap-2 pt-2 text-[#FDFDFD]">
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default HomeLayout