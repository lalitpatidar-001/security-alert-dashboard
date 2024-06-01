import React from 'react'

const Card = ({components}) => {
  return (
    <div className="bg-[#1C1E22] rounded-[8px] h-[248px] w-full">
      {components}
    </div>
  )
}

export default Card