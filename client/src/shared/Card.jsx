import React from 'react'

const Card = ({ components,title }) => {
  return (
    <div className="bg-[#1C1E22] p-1 text-white flex flex-col items-center justify-center rounded-[8px] h-[400px] w-full">
     <h3 className="text-lg font-semibold ">{title}</h3>
      {components}
    </div>
  )
}

export default Card