import { Menu, Transition } from '@headlessui/react'
import React , { Fragment} from 'react'
import { FiSettings } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { layoutUpdate } from '../store/layout/actions';
import { AREACHART, BARCHART, BOXCHART, SCATERCHART } from '../constant/default';

export default function SettingsMenu({layoutItem}) {
  const dispatch = useDispatch();
  const {layouts} = useSelector(state => state.layouts)
  
  const updateData = (e) => {
    e.preventDefault();
      const Updatedlayout = layouts.filter((item) => item.i !== layoutItem.i);
      // Update State
      dispatch(layoutUpdate([...Updatedlayout]))
  }

  const updateChart = (e) => {
    let data = {};
    switch (e.target.value) {
      case 'Bar Chart':
        data = BARCHART
        break;
      case 'Area Range Chart':
        data = AREACHART
        break;
      case 'Scater Chart':
        data = SCATERCHART
        break;
      case 'Box Whisker Plot':
        data = BOXCHART
        break;
      default:
        break;
    }

    const updatedLayouts = layouts.map((item,index) => {
      if(layoutItem.i === item.i){
        item.item = e.target.value;
        item.data = data
      }
      return item
    })

    dispatch(layoutUpdate([...updatedLayouts]))
  }

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full bg-slate-400 p-2 rounded-sm justify-center  text-sm font-medium text-[#fff] 
          hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <FiSettings></FiSettings>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-46 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={updateData}
                    className={`${
                      active ? 'bg-[#019267] text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-1 text-[10px]`}
                  >
                    Remove Chart
                  </button>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-1 ">
              <Menu.Item>
                 <select className='input__field !text-[10px]' onChange={(e) => updateChart(e)}>
                    <option className='text-[10px]' value={'Bar Chart'}>-- Bar Chart --</option>
                    <option className='text-[10px]' value={'Box Whisker Plot'}>-- Box & Whisker Chart --</option>
                    <option className='text-[10px]' value={'Area Range Chart'}>-- Area Chart --</option>
                    <option className='text-[10px]' value={'Scater Chart'}>-- Sacter Chart --</option>
                 </select>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
