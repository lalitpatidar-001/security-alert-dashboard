import React, { useState, useEffect } from 'react'
import Card from '../shared/Card'
import BigCard from '../shared/BigCard'
import { security_data } from '../data';
import AlertOverview from '../components/AlertOverview';
import { useDispatch } from "react-redux"
import { addOverviewData } from '../redux/slices/overviewSlice';
import PieChart from '../components/charts/PieChart';
import DoughnutChart from '../components/charts/DoughnutChart';
import { getTop10AffectedPorts } from '../data-processing/getTop10AffectedPorts';
import PolarAreaChart from '../components/charts/PolarAreaChart';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import { getSignatureByPortData } from '../data-processing/getSignatureByPortData';
import { getCalculateCategorySeverity } from '../data-processing/getClaculateCategorySeverity';
import { getTopTrafficOrigins } from '../data-processing/getTopTrafficOrigins';

const initialState = {
  catagories: [],
  noOfPortAffected: [],
  srcIp: [],
  typeOfAttack: [],
  highestSeverity: 0,
}

const OverviewPage = () => {
  const result = getCalculateCategorySeverity();
  const top10TrafficOriginsSeverity = getTopTrafficOrigins();
  const top10AffectedPortsSeverity = getTop10AffectedPorts();
  const signatureByPortData = getSignatureByPortData();
  console.log(result)
  const [overview, setOverview] = useState(initialState);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(addOverviewData());
  }, []);




  return (
    <div className=" w-full px-1  text-[#1C1E22]">
      <div className=" flex flex-col xl:flex-row   justify-between gap-2">
        <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
          <Card title="Security Overview" components={<AlertOverview overview={overview} />} />
          <Card title="Severity By Categories" components={<PieChart chartData={{ data: result.avgSeverities, label: result.categories }} />} />
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full gap-2">
          <Card title="Top 10 Traffic Origins with severity" components={<DoughnutChart chartData={{ data: top10TrafficOriginsSeverity.avgSeverities, label: top10TrafficOriginsSeverity.origins }} />} />
          <Card title="Top 10 affected Ports" components={<PolarAreaChart chartData={{ data: top10AffectedPortsSeverity.avgSeverities, label: top10AffectedPortsSeverity.ports }} />} />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-2 pt-2 ">
        <BigCard title="Severity By year"  component={<BarChart />}/>
        <BigCard title="Signature By Port" component={<LineChart chartData={signatureByPortData}/>} />
      </div>
    </div>
  )
}

export default OverviewPage