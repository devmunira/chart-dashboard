import React from 'react'
import BarChartComponent from '../../components/charts/BarChart'
import BreadCrumb from '../../components/BreadCrumb'
import { BARCHARTBREADCRUMBE } from '../../constant/default'

const BarChart = () => {
  return (
   <div className='section'>
    <div className='container w-full h-[80vh]'>
        <BreadCrumb menus={BARCHARTBREADCRUMBE}></BreadCrumb>
        <BarChartComponent></BarChartComponent>
    </div>
   </div>
  )
}

export default BarChart