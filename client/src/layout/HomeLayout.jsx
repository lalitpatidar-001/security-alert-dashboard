import React from 'react'
import {Outlet} from "react-router-dom"
const HomeLayout = () => {
  return (
    <div className="flex gap-2 pt-2 text-[#FDFDFD]">
        <Outlet/>
    </div>
  )
}

export default HomeLayout