import React, { useState, useEffect } from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  countUpdate,
  layoutUpdate,
  typeUpdate
} from '../store/layout/actions';
import useToggle from '../hooks/useToggle';
import { CHARTS } from '../constant/default';
import SettingsMenu from '../components/SettingsMenu';
import {
  Responsive,
  WidthProvider
} from "react-grid-layout";

import BarChartComponent from '../components/charts/BarChart';
import AreaRangeChart from '../components/charts/AreaRangeChart';
import BoxWhiskerPlot from '../components/charts/BoxWhiskerPlot';
import ScaterChart from '../components/charts/ScaterChart';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const { layouts, compactionType, counts } = useSelector((state) => state.layouts);
  const charts = useSelector((state) => state.charts);
  const dispatch = useDispatch();
  const { toggle, setToggle } = useToggle();
  const [savedLayouts, setSavedLayouts] = useState([]);

  useEffect(() => {
    const savedLayouts = getLayouts();
    setSavedLayouts(savedLayouts);
  }, []);

  const generateLayout = (item, index) => {
    // Find the chart data based on the index
    const chartKey = Object.keys(charts)[index];
    const data = charts[chartKey];
  
    // Calculate new layout properties
    const newItemIndex = counts + 1;
    let newLayout = createNewLayout(item, newItemIndex, data);
  
    // Determine the x and y coordinates for the new item
    const lastTwoIndexVal = layouts.slice(-2);
    newLayout = updateCoordinates(newLayout, lastTwoIndexVal);
  
    // Update the state and toggle
    updateStateAndToggle(newLayout);
  };
  
  const createNewLayout = (item, newItemIndex, data) => {
    return [{
      i: `item-${newItemIndex}`,
      x: 0,
      y: 0,
      w: 1,
      h: 14,
      item,
      data
    }];
  };
  
  const updateCoordinates = (newLayout, lastTwoIndexVal) => {
    if (lastTwoIndexVal.length === 2) {
      // If there are exactly two items in the last two positions
      newLayout[0].x = lastTwoIndexVal[1].x === 1 ? 0 : 1;
      newLayout[0].y = lastTwoIndexVal[0].y === lastTwoIndexVal[1].y
        ? (lastTwoIndexVal[1].y === 1 ? 0 : 1)
        : lastTwoIndexVal[1].y;
    } else if (lastTwoIndexVal.length === 1) {
      // If there's only one item in the last position, position the new item accordingly
      newLayout[0].x = lastTwoIndexVal[0].x === 1 ? 0 : 1;
      newLayout[0].y = lastTwoIndexVal[0].y === 1 ? 0 : 1;
    }
    return newLayout;
  };
  
  const updateStateAndToggle = (newLayout) => {
    // Update the state with the new layout
    dispatch(layoutUpdate([...layouts, ...newLayout]));
  
    // Increment the counts and update the toggle
    dispatch(countUpdate(1));
    setToggle(!toggle);
  };
  

  const changeCompactionType = () => {
    const newType = compactionType === 'vertical' ? 'horizontal' : 'vertical';
    dispatch(typeUpdate(newType));
  };

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
  };

  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  return (
    <div className='section pb-10'>
      <div className="pl-4 pt-16 md:pt-0  flex justify-start items-center gap-1 flex-wrap">
        <button onClick={() => setToggle({ isOpen: !toggle.isOpen, type: 'addItem' })} className='btn'>Add Item</button>
        {/* Drop Down Menu */}
        {toggle.isOpen && toggle.type === 'addItem' && (
          <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute duration-500 ease-in-out text-left">
            <ul className="text-sm text-gray-700 dark:text-gray-200">
              {CHARTS.map((item, index) => (
                <li key={index}>
                  <button
                    type='button'
                    className="w-full text-left cursor-pointer hover:bg-slate-300 duration-500 p-2"
                    onClick={() => generateLayout(item, index)}
                    key={index}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Change Alignment Btn */}
        <button onClick={changeCompactionType} className='btn'>Change Compaction Type ({compactionType})</button>
        {/* Change Layouts */}
        <button onClick={shuffleLayout} className='btn'>Change Layout</button>
      </div>

      <ResponsiveGridLayout
        layouts={{ lg: layouts }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 2, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={30}
        width={"100vw"}
        onLayoutChange={handleLayoutChange}
        className='flex justify-start flex-wrap;'
        compactionType={compactionType}
      >
        {[...layouts].reverse().map((layoutItem) => (
          <div key={layoutItem.i} className=" bg-slate-300 p-5 box-border m-2 h-full">
            <div className='flex justify-between items-center pb-1'>
              <span>{layoutItem.i}</span>
              <div><SettingsMenu layoutItem={layoutItem}></SettingsMenu></div>
            </div>
            {layoutItem.item === 'Bar Chart' && (
              <div className='w-full h-full'><BarChartComponent fromDashboardComponent={true} content={layoutItem}></BarChartComponent></div>
            )}
            {layoutItem.item === 'Area Range Chart' && (
              <div className='w-full h-full'><AreaRangeChart content={layoutItem} fromDashboardComponent={true}></AreaRangeChart></div>
            )}
            {layoutItem.item === 'Box Whisker Plot' && (
              <div className='w-full h-full'><BoxWhiskerPlot content={layoutItem} fromDashboardComponent={true}></BoxWhiskerPlot></div>
            )}
            {layoutItem.item === 'Scater Chart' && (
              <div className='w-full h-full'><ScaterChart content={layoutItem} fromDashboardComponent={true}></ScaterChart></div>
            )}
          </div>
        ))}

      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
