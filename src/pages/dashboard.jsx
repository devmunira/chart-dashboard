import React from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import BarChartComponent from '../components/charts/BarChart';
import AreaRangeChart from '../components/charts/AreaRangeChart';
import BoxWhiskerPlot from '../components/charts/BoxWhiskerPlot';
import ScaterChart from '../components/charts/ScaterChart';
import { useDispatch, useSelector } from 'react-redux';
import { countUpdate, layoutUpdate, typeUpdate } from '../store/layout/actions';
import useToggle from '../hooks/useToggle';
import { CHARTS } from '../constant/default';
import SettingsMenu from '../components/SettingsMenu';
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);


const Dashboard = () => {
  const {layouts , compactionType , counts} = useSelector((state) => state.layouts)
  const charts = useSelector((state) => state.charts)
  const dispatch = useDispatch()
  const {toggle, setToggle} = useToggle()

  // Add New Chart on Grid
  const generateLayout = (item , index) => {
    let data = {};
    Object.keys(charts).filter((item,i) => {
      if(i === index){
        data = charts[item]
      }
    });
    const newLayout = [
      { i: `item-${counts + 1}`, x: 0, y: 0, w: 6, h: 14 , item , data},
    ];
    dispatch(layoutUpdate([...layouts , ...newLayout]))
    dispatch(countUpdate(1));
    setToggle(!toggle)
  };

  // Change Grid Alignment Horizontal Or Vertical
  const changeCompactionType = () => {
    const newType = compactionType === 'vertical' ? 'horizontal' : 'vertical';
    dispatch(typeUpdate(newType));
  };

  // Suffle layouts for change frid layouts
  const shuffleLayout = () => {
    const shuffledLayout = [...layouts];
    for (let i = shuffledLayout.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledLayout[i], shuffledLayout[j]] = [shuffledLayout[j], shuffledLayout[i]];
    }
    dispatch(layoutUpdate([...shuffledLayout]));
  };

  const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");
    return savedLayouts ? JSON.parse(savedLayouts) : { lg: layouts };
  }

  const handleLayoutChange = (layout, layouts) => {
  localStorage.setItem("grid-layout", JSON.stringify(layouts));
  }


  return (
    <div className='section pb-10'>
      <div className="pl-4 pt-16 md:pt-0  flex justify-start items-center gap-1 flex-wrap">
          <button onClick={()=>setToggle({isOpen: !toggle.isOpen , type : 'addItem'})} className='btn'>Add Item</button>
          {/* Drop Down Menu */}
          {
            (toggle.isOpen && toggle.type === 'addItem') && (
            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute duration-500 ease-in-out text-left">
              <ul className="text-sm text-gray-700 dark:text-gray-200">
                {
                  CHARTS.map((item,index) => (
                    <li key={index}>
                      <button type='button' className="w-full text-left cursor-pointer hover:bg-slate-300 duration-500 p-2" onClick={() => generateLayout(item, index)} key={index}>{item}</button>
                    </li>
                  ))
                }
              </ul>
            </div>)
          }
          {/* Change Alignment Btn */}
          <button onClick={() => changeCompactionType()} className='btn'>Change Compaction Type ({compactionType})</button>
          {/* Change Layouts */}
          <button onClick={() => shuffleLayout()} className='btn'>Change Layout</button>

      </div>

      <ResponsiveGridLayout
        layouts={{ lg: layouts }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 2, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={30}
        width={"100vw"}
        onLayoutChange={handleLayoutChange}
        >
        {layouts.map((layoutItem) => (
          <div key={layoutItem.i} className=" bg-slate-300 p-5 box-border m-2 h-full">
           <div className='flex justify-between items-center pb-1'>
                <span>{layoutItem.i}</span>
                <div><SettingsMenu layoutItem={layoutItem}></SettingsMenu></div>
           </div>
            {layoutItem.item === 'Bar Chart' && <div className='w-full h-full'><BarChartComponent fromDashboardComponent={true} content={layoutItem}></BarChartComponent></div>}
            {layoutItem.item === 'Area Range Chart' && <div className='w-full h-full'><AreaRangeChart content = {layoutItem}  fromDashboardComponent={true}></AreaRangeChart></div>}
            {layoutItem.item === 'Box Whisker Plot' && <div className='w-full h-full'><BoxWhiskerPlot content = {layoutItem}  fromDashboardComponent={true}></BoxWhiskerPlot></div>}
            {layoutItem.item === 'Scater Chart' && <div className='w-full h-full'><ScaterChart content = {layoutItem} fromDashboardComponent={true}></ScaterChart></div>}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
