import React from 'react'
import Card from '../shared/Card'
import BigCard from '../shared/BigCard'

const OverviewPage = () => {
  return (
    <div className=" w-full px-1  text-[#1C1E22]">
      <div className="flex justify-between gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex gap-2 pt-2 ">
        <BigCard/>
        <BigCard/>
      </div>
    </div>
  )
}

export default OverviewPage