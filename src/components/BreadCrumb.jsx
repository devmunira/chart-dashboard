import React from 'react'

const BreadCrumb = ({menus}) => {
  return (
    <div className='text-[11px] bg-slate-200 dark:bg-main-bg dark:text-white text-slate-700 py-3 px-5 mb-5 mt-20 md:mt-0'>
        <a href={'/'} className='!cursor-pointer hover:text-blue-500 duration-500 ease-in-out'>Dashboard </a> / {menus.map((item,index) => (
        <a key={index} href={item.link} className='!cursor-pointer hover:text-blue-500 duration-500 ease-in-out'>{item.title} {index === menus.length - 1 ? '' : '/'} </a>
    ))}</div>
  )
}

export default BreadCrumb