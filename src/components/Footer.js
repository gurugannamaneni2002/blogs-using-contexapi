import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const Footer = () => {
  const {page,totalPage,fetchData} = useContext(AppContext);
  return (
    <div className='border-2 shadow-md fixed bottom-0 w-screen z-10 bg-white'>
    <div className='py-1 max-w-[700px] mx-auto flex justify-between items-center'>
    <div className='flex justify-start gap-3'>
    <div>
      {
        page > 1 ?<button className=' p-1 rounded border shadow-[0_0_10px_-15px_rgba(0,0,0,0.5)]' onClick={()=>fetchData(page-1)}>Previous</button>:"" 
      }
    </div>
    <div>
      {
        page < totalPage ?<button className=' p-1 px-3 rounded border shadow-xl' onClick={()=>fetchData(page+1)}>Next</button>:"" 
      }
    </div>

    </div>
    <div>
      Page <span> {page} </span> of <span>{totalPage}</span>
    </div>
    </div>
    </div>
  )
}

export default Footer