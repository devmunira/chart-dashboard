import React from 'react'
import { BiCart, BiChat, BiMenuAltLeft, BiNotification } from 'react-icons/bi'
import Profile from "./../data/avatar.jpg"
import { updateSettings } from '../store/settings/actions.js'
import { useDispatch } from 'react-redux'

const Navbar = ({settings}) => {
  const dispatch = useDispatch();
  return (
    <div className='bg-slate-600 py-4 px-10 shadow-sm text-white flex justify-between items-center'>

        <div className='navbar__left'>
          <BiMenuAltLeft className='text-2xl !cursor-pointer' onClick={() => dispatch(updateSettings({activeMenu : !settings.activeMenu}))}></BiMenuAltLeft>
        </div>

        <div className='navbar__right flex justify-end gap-3 items-center'>
            <BiCart  className='text-xl'></BiCart>
            <BiChat className='text-xl'></BiChat>
            <BiNotification className='text-xl'></BiNotification>
            <div className='flex justify-center items-center gap-2'>
              <img src={Profile} alt='Profile' className='profile'></img>
              <p className='paragraph'>Hello! Munira</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar