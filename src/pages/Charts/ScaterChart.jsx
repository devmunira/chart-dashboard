import React from 'react'
import ScaterChart from '../../components/charts/ScaterChart'
import BreadCrumb from '../../components/BreadCrumb'
import { SCATERRCHARTBREADCRUMBE } from '../../constant/default'

const ScaterChartPage = () => {
  return (
    <div className='section'>
      <div className='container w-full h-[70vh]'>
        <BreadCrumb menus={SCATERRCHARTBREADCRUMBE}></BreadCrumb>
        <ScaterChart></ScaterChart>
      </div>
    </div>
  )
}

export default ScaterChartPage