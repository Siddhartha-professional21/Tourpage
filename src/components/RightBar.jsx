import React from 'react'
import user4 from '../assets/user4.jpg'
import user5 from '../assets/user5.jpg'
import user6 from '../assets/user6.jpg'


const RightBar = () => {
  return (
    <div className='w-10% border-l border-neutral-700 px-6 '>
        <img src={user4} alt="user" className='rounded-full h-10 w-10 mt-48' />
        <img src={user5} alt="user" className='rounded-full h-10 w-10 mt-6' />
        <img src={user6} alt="user" className='rounded-full h-10 w-10 mt-6'/>
        <img src={user4} alt="user" className='rounded-full h-10 w-10 mt-6'/>
        <img src={user5} alt="user" className='rounded-full h-10 w-10 mt-6'/>
    </div>
  )
}

export default RightBar