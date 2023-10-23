import React, { useRef } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import { useSelector } from 'react-redux';
import useChartUpdate from '../../hooks/useChartUpdate';
import Filter from '../Filter';
import exporting from 'highcharts/modules/exporting';
HighchartsMore(Highcharts); 
exporting(Highcharts);

const BoxWhiskerPlot = ({fromDashboardComponent = false , content = {}}) => {
  const chartRef = useRef(null);
  const { boxChart } = useSelector(state => state.charts);
  const {filter, setFilter , updateData} = useChartUpdate({content : fromDashboardComponent ? content : boxChart, type : 'boxChart' , chartRef , fromDashboardComponent});
 
  return (
    <>
          <Filter filter={filter} setFilter={setFilter} updateData={updateData}></Filter>
          <div className='bg-slate-500 relative p-10 !max-w-[100%] !h-[70%] box-border overflow-hidden'>
          {boxChart ? (
            <HighchartsReact
              options={fromDashboardComponent ? content.data : boxChart}
              highcharts={Highcharts}
              containerProps={{ style: { position : 'absolute' , top : 0, left : 0, width: '100%', height: '100%'  } }}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
    </>
  );
};

export default BoxWhiskerPlot;
