import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import useChartUpdate from '../../hooks/useChartUpdate';
import Filter from '../Filter';
HighchartsMore(Highcharts);

const AreaRangeChart = ({fromDashboardComponent = false , content = {}}) => {
  const { areaChart } = useSelector(state => state.charts)
  const chartRef = useRef(null);
  const {filter, setFilter , updateData} = useChartUpdate({content : fromDashboardComponent ? content : areaChart, type : 'areaChart' , chartRef , fromDashboardComponent});
  return (
    <>
        <Filter filter={filter} setFilter={setFilter} updateData={updateData}></Filter>
        <div className='bg-slate-500 relative p-10 !max-w-[100%] !h-[70%] box-border overflow-hidden'>

          {areaChart ? (
            <HighchartsReact
              options={fromDashboardComponent ? content.data : areaChart}
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

export default AreaRangeChart;
