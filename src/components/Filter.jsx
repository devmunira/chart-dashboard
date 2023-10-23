import React from 'react'

const Filter = ({filter , setFilter , updateData}) => {
  return (
    <div className='mb-5 bg-slate-100 py-3 px-5 flex justify-between items-center !max-w-[100%] flex-wrap gap-2'>
        
        <div className=''>
            <form onSubmit={(e) => updateData(e)} className='flex gap-2'>
                <input type="text" name="title"  value={filter.title}  onChange={(e) => setFilter({...filter , [e.target.name] : e.target.value}) }    id="" placeholder='Title' className='input-field'/>

                <input type="text" name="subtitle" value={filter.subtitle} onChange={(e) => setFilter({...filter , [e.target.name] : e.target.value}) } id="" placeholder='Sub Title' className='input-field'/>

                <button type='submit' className='bg-green-600 text-white text-[10px] rounded-sm text-center py-1 px-2 hover:bg-green-500 duration-200'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Filter