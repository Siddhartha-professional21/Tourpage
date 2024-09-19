import React from 'react'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'
import { FaPlus } from 'react-icons/fa'

const RightBar = () => {
  return (
    <div className='w-10% border-l border-neutral-700 px-6 flex flex-col items-center'>
      <img src={user4} alt="user" className='rounded-full h-10 w-10 mt-48' />
      <img src={user5} alt="user" className='rounded-full h-10 w-10 mt-6' />
      <img src={user6} alt="user" className='rounded-full h-10 w-10 mt-6'/>
      <img src={user4} alt="user" className='rounded-full h-10 w-10 mt-6'/>
      <img src={user5} alt="user" className='rounded-full h-10 w-10 mt-6'/>

      <div className='bg-yellow-400 text-white flex items-center justify-center mt-6 w-8 h-8 rounded-lg'>
        <FaPlus className='text-lg' />
      </div>
    </div>
  )
}

export default RightBar