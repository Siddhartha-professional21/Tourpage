import React from 'react'
import { FaSearch,FaRegBell } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import user from '../assets/user4.jpg';


const Topbar = () => {
  return (
    <div className='flex justify-between mt-3'>
        <div className="search flex items-center w-1/2 space-x-2 border rounded-full px-3 ">
        <FaSearch className=''/>
        <input type="text" placeholder='search here..' className='bg-transparent outline-0'/>
        </div>

        <div className='flex items-center space-x-3'>
            <FaRegBell className='h-10 '/>
            <MdOutlineMessage className='h-10 w-5 '/>
            <img src={user} alt="user-img" className='rounded-full h-10 w-10 '/>
            <h5>User.com</h5>


        </div>
    </div>
  )
}

export default Topbar