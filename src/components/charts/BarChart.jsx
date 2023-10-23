import HighchartsReact from 'highcharts-react-official';
import React , {useRef} from 'react'
import { useSelector } from 'react-redux'
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import Filter from '../Filter';
import useChartUpdate from '../../hooks/useChartUpdate';


const BarChartComponent = ({fromDashboardComponent = false , content}) => {
  exporting(Highcharts);
  const chartRef = useRef(null);
  const {barChart} = useSelector(state => state.charts);
  const {filter, setFilter , updateData} = useChartUpdate({content : fromDashboardComponent ? content : barChart, type : 'barChart' , chartRef , fromDashboardComponent});


  return (
    <>
      <Filter filter={filter} setFilter={setFilter} updateData={updateData}>
      </Filter>
      <div className='bg-slate-500 relative p-10 !max-w-[100%] !h-[70%] box-border overflow-hidden'>
        {
          barChart ? (<HighchartsReact
          options={fromDashboardComponent ? content.data : barChart}
          highcharts={Highcharts}
          ref={chartRef}
          containerProps={{ style: { position : 'absolute' , top : 0, left : 0, width: '100%', height: '100%'  } }}
          ></HighchartsReact>) : (<div>Loading....</div>)
        }
      </div>
    </>
  )
}

export default BarChartComponent