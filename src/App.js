import React, { useEffect } from 'react'
import { BrowserRouter , Route , Routes } from "react-router-dom"
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import {Dashboard, BarChart, BoxWhiskerPlot, ScaterChartPage, AreaRangePage } from './pages/index';
import {Sidebar , Navbar , Footer} from "./components/index"
import { Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import './app.css'
import { updateSettings } from './store/settings/actions';

const App = () => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  

  useEffect(() => {
    // Check the window width and update the activeMenu setting accordingly
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        dispatch(updateSettings({ activeMenu: false }));
      } else {
        dispatch(updateSettings({ activeMenu: true }));
      }
    };
    // Add an event listener for the resize event
    window.addEventListener('resize', handleResize);
  
    // Initial check on component mount
    handleResize();
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]); 
  
  return (
    <div className='bg-main-bg'>
      <BrowserRouter>
        <div className='relative flex bg-main-bg w-full'>

          
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                style={{background : '#019267'}}
                className="text-3xl text-white rounded-[50%] p-3 hover:drop-shadow-xl hover:bg-light-gray "
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>

            <div className="w-50 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Transition
                show={settings.activeMenu}
                enter="transition ease-in-out duration-50000 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-50000 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Sidebar activeMenu={settings.activeMenu} dispatch={dispatch}></Sidebar>
              </Transition>
            </div>
          
          
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Transition
                show={settings.activeMenu}
                enter="transition ease-in-out duration-50000 transform"
                leaveFrom="-translate-x-full"
                leaveTo="translate-x-0"
                leave="transition ease-in-out duration-5000 transform"
                enterFrom="translate-x-0"
                enterTo="-translate-x-full"
              >
                <Sidebar></Sidebar>
              </Transition>
            </div>
          

          <div className={`min-h-screen w-full bg-main-bg dark:bg-main-dark-bg  ${settings.activeMenu ? 'md:ml-52' : 'flex-2'}`}>
              <div className='flex-none fixed md:static navbar bg-main-bg dark:bg-main-dark-bg w-full'>
                <Navbar settings={settings}/>
              </div>

              <div className='bg-main-bg grow'>
                <Routes>
                  <Route path='/' element={<Dashboard></Dashboard>}></Route>
                  <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                  <Route path='/bar-chart' element={<BarChart></BarChart>}></Route>
                  <Route path='/area-range-chart' element={<AreaRangePage></AreaRangePage>}></Route>
                  <Route path='/box-whisker-plot' element={<BoxWhiskerPlot></BoxWhiskerPlot>}></Route>
                  <Route path='/scater-chart' element={<ScaterChartPage></ScaterChartPage>}></Route>
                </Routes>
              </div>
              <Footer></Footer>
          </div>


          </div>
      </BrowserRouter>
    </div>
  )
}

export default App