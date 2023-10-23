import React from 'react'
import AreaRangeChart from '../../components/charts/AreaRangeChart'
import BreadCrumb from '../../components/BreadCrumb';
import { AREACHARTBREADCRUMBE } from '../../constant/default';


const AreaRangePage = () => {
  return (
    <div className='section'>
      <div className='container w-full h-[80vh]'>
        <BreadCrumb menus={AREACHARTBREADCRUMBE}></BreadCrumb>
        <AreaRangeChart></AreaRangeChart>
      </div>
    </div>
  )
}

export default AreaRangePage