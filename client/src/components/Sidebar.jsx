import React from 'react'
import SortIcon from '@mui/icons-material/Sort';

const Sidebar = () => {
    return (
        <div className="bg-[#1C1E22] w-[88px] rounded-[8px] pt-4">
            <div className="flex flex-col  items-center ">
                <SortIcon />
            </div>
            <div className="flex flex-col gap-4 items-center pt-12 ">
                <SortIcon />
                <SortIcon />
                <SortIcon />
                <SortIcon />
            </div>
        </div>
    )
}

export default Sidebar