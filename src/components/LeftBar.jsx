import React from 'react'
import { FaRegCompass,FaRegHeart  } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";



const LeftBar = () => {
  return (
    <div className='w-25% h-screen '>
        <div className='mt-14 ml-10'>
            <h6 className='text-2xl my-5'>TRAVELLER</h6>
            <h2>Menu</h2>
            <div className='flex flex-col ml-4 mt-2'>
            <a href="#" className='flex mb-2 bg-yellow-400 px-4 py-2 rounded-lg'>
                <FaRegCompass className='mt-1'/>
                <span className='ml-2'>Browser</span>
            </a>
            <a href="#" className='flex mb-2'>
                <FaRegHeart className='mt-1'/>
                <span className='ml-2'>Favorites</span>
            </a>
            <a href="#" className='flex mb-2'>
                <CiCalendar className='mt-1'/>
                <span className='ml-2'>Schedule</span>
            </a>
            </div>
        </div>
        
    </div>
  )
}

export default LeftBar