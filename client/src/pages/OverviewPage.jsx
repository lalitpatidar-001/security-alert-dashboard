import React, { useState, useEffect } from 'react'
import Card from '../shared/Card'
import BigCard from '../shared/BigCard'
import { security_data } from '../data';
import AlertOverview from '../components/AlertOverview';
import {useDispatch} from "react-redux"
import { addOverviewData } from '../redux/slices/overviewSlice';

const initialState = {
  catagories: [],
  noOfPortAffected: [],
  srcIp: [],
  typeOfAttack: [],
  highestSeverity: 0,
}

const OverviewPage = () => {
  const [overview, setOverview] = useState(initialState);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(addOverviewData());
    security_data.map((item) => {

      // setOverview(prev => ({ ...prev, catagories:prev.catagories.includes(item.alert?.category) ? prev.catagories : [...prev.catagories, item.alert?.category]}))
      // setOverview(prev => ({ ...prev, noOfPortAffected:prev.catagories.includes(item.dest_port) ? prev.noOfPortAffected : [...prev.noOfPortAffected, item.dest_port]}))
      // setOverview(prev => ({ ...prev, typeOfAttack :prev.catagories.includes(item.alert?.signature) ? prev.typeOfAttack : [...prev.typeOfAttack, item.alert?.signature]}))

      // setOverview(prev => (prev.includes(item.alert?.signature) ? prev : [...prev, item.alert?.signature]))
      // setOverview(prev => (prev.includes(item.src_ip) ? prev : [...prev, item.src_ip]))
      
      // setOverview(prev => (prev < item.alert?.severity ? item.alert?.severity : prev))
    })

  }, []);

  return (
    <div className=" w-full px-1  text-[#1C1E22]">
      <div className="flex justify-between gap-2">
        <Card components={<AlertOverview overview={overview} />} />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex gap-2 pt-2 ">
        <BigCard />
        <BigCard />
      </div>
    </div>
  )
}

export default OverviewPage