import React from 'react'
import { useEffect, useState } from "react";
import { security_data } from '../data';
import { useSelector } from "react-redux"


const AlertOverview = ({ overview }) => {
    const { 
        totalAlerts,
        catagories,
        noOfPortAffected,
        srcIp,
        typeOfAttack,
        highestSeverity } = useSelector(state => state.Overview);
console.log( 
    totalAlerts,
    catagories,
    noOfPortAffected,
    srcIp,
    typeOfAttack,
    highestSeverity)
    return (

        <div className="text-[#e6dcdc] h-full w-full p-4 flex flex-col justify-between">
            <div className="flex gap-2 items-center ">
                <span className="text-lg font-bold">Total Alerts :</span>
                <span className="text-lg font-bold">{totalAlerts >=0 ? totalAlerts : "NA"}</span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text-md font-bold">Total Alert Categories :</span>
                <span className="text-md font-bold">{catagories?.length >=0 ? catagories?.length : "NA"}</span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="text-md font-bold">Total Affected Ports :</span>
                <span className="text-md font-bold">{noOfPortAffected?.length >=0 ? noOfPortAffected?.length : "NA"}</span>
            </div>

            <div className="flex gap-2 items-center">
                 <span className="text-md font-bold">Total Traffic Origins :</span>
                 <span className="text-md font-bold">{srcIp?.length >=0 ? srcIp?.length : "NA"}</span>
             </div>

            <div className="flex gap-2 items-center">
                <span className="text-md font-bold">Total Attack Type :</span>
                <span className="text-md font-bold">{typeOfAttack?.length >=0 ? typeOfAttack?.length : "NA"}</span>
            </div>
            
             <div className="flex gap-2 items-center">
                 <span className="text-md font-bold">Highest Severity :</span>
                <span className="text-md font-bold">{highestSeverity>=0 ? highestSeverity : "NA"}</span>
             </div> 
        </div>
    )
}

export default AlertOverview