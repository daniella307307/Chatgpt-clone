import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faAtom, faEllipsis, faTableList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Sidebar() {
  return (
    <div>
       <div>
         <div className='p-2'>
            <FontAwesomeIcon icon={faTableList} className='float-left'/>
            <FontAwesomeIcon icon={faEdit} className='float-right'/>
         </div>
         <div>
          <ul className='list'>
            <li className='mt-[3em]  pl-4 w-full p-1 rounded-[2em] hover:bg-gray-400'><FontAwesomeIcon icon={faAtom} className='text-[1em] mr-[.5em] border-2 rounded-full p-[.1em]'/> <span>ChatGPT</span> <FontAwesomeIcon icon={faEllipsis} className='float-right mt-2'/></li>
            <li className='mt-[.5em] pl-4 w-full p-1 rounded-[2em] hover:bg-gray-400'><span className='text-[1.2em] mr-[.5em]  p-[.1em] material-symbols-outlined'>interests</span> <span>Explore GPTs</span> <FontAwesomeIcon icon={faEllipsis} className='float-right mt-2'/></li>
          </ul>
         </div>
         <div className='mt-4'>
          <span className='font-bold pl-2  text-[.9em]'>Today</span>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
         </div>
         <div className='mt-4'>
          <span className='font-bold pl-2  text-[.9em]'>Yesterday</span>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
         </div>
         <div className='mt-4'>
          <span className='font-bold pl-2  text-[.9em]'>June</span>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
          <p className='pl-4 text-gray-400 mt-4'>Using FontAwesomeIcon<FontAwesomeIcon className='float-right mt-2' icon={faEllipsis}/></p>
         </div>
        </div> 
    </div>
  )
}

export default Sidebar