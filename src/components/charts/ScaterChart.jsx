import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Filter from '../Filter';
import useChartUpdate from '../../hooks/useChartUpdate';
HighchartsMore(Highcharts);

const ScaterChart = ({fromDashboardComponent = false , content = {}}) => {
  const { scaterChart } = useSelector(state => state.charts)
  const chartRef = useRef(null);
  const {filter, setFilter , updateData} = useChartUpdate({content : fromDashboardComponent ? content :  scaterChart, type : 'scaterChart' , chartRef , fromDashboardComponent});


  return (
    <>
        <Filter filter={filter} setFilter={setFilter} updateData={updateData}></Filter>
        <div className='bg-slate-500 relative p-10 !max-w-[100%] !h-[70%] box-border overflow-hidden'>

          {scaterChart ? (
            <HighchartsReact
              options={fromDashboardComponent ? content.data : scaterChart}
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

export default ScaterChart;
