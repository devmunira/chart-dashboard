import React from 'react'
import BoxWhiskerPlot  from '../../components/charts/BoxWhiskerPlot'
import BreadCrumb from '../../components/BreadCrumb'
import { BOXCHARTBREADCRUMBE } from '../../constant/default'

const Box = () => {
  return (
    <div className='section'>
      <div className='container w-full h-[80vh]'>
        <BreadCrumb menus={BOXCHARTBREADCRUMBE}></BreadCrumb>
        <BoxWhiskerPlot></BoxWhiskerPlot>
      </div>
    </div>
  )
}

export default Box