import React from 'react'
import { FaRegCompass, FaRegHeart, FaUser, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";

const LeftBar = () => {
  return (
    <div className='w-25% h-screen flex flex-col justify-between'>
      <div>
        <div className='mt-14 ml-10'>
          <h6 className='text-2xl my-5'>TRAVELLER</h6>
          <h2>Menu</h2>
          <div className='flex flex-col ml-4 mt-2'>
            <a href="#" className='flex mb-2 bg-yellow-400 px-4 py-2 rounded-lg'>
              <FaRegCompass className='mt-1' />
              <span className='ml-2'>Browser</span>
            </a>
            <a href="#" className='flex mb-2'>
              <FaRegHeart className='mt-1' />
              <span className='ml-2'>Favorites</span>
            </a>
            <a href="#" className='flex mb-2'>
              <CiCalendar className='mt-1' />
              <span className='ml-2'>Schedule</span>
            </a>
          </div>

          <h2 className='mt-6'>Social</h2>
          <div className='flex flex-col ml-4 mt-2'>
            <a href="#" className='flex mb-2'>
              <FaUser className='mt-1' />
              <span className='ml-2'>Friends</span>
            </a>
            <a href="#" className='flex mb-2'>
              <FaUsers className='mt-1' />
              <span className='ml-2'>Parties</span>
            </a>
          </div>

          <h2 className='mt-6'>General</h2>
          <div className='flex flex-col ml-4 mt-2'>
            <a href="#" className='flex mb-2'>
              <FaCog className='mt-1' />
              <span className='ml-2'>Settings</span>
            </a>
            <a href="#" className='flex mb-2'>
              <FaSignOutAlt className='mt-1' />
              <span className='ml-2'>Logout</span>
            </a>
          </div>
        </div>
      </div>

      <div className='flex justify-center mb-10'>
        <div className='bg-gray-500 text-white p-8 rounded-lg w-3/4 text-center'>
          <p className='text-4xl font-bold text-black'>50% Off</p>
          <p className='text-2xl font-bold text-black mt-2'>Sale Sale!!</p>
        </div>
      </div>
    </div>
  )
}

export default LeftBar
