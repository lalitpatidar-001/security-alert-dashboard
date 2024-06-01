import React from 'react'

const BigCard = ({component,title}) => {
  return (
    <div className="bg-[#1C1E22] text-white items-center flex flex-col rounded-[8px] h-[400px] w-full">
       <h3 className="text-lg font-semibold ">{title}</h3>
      {component}
    </div>
  )
}

export default BigCard