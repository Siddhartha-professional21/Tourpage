import React from 'react'
import { FaRegCompass,FaRegHeart,FaRegUser  } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";




const LeftBar = () => {
  return (
    <div className='w-[12%] h-screen relative'>
        <div className='mt-14 ml-10'>
            <h6 className='text-2xl my-5'>TRAVELLER</h6>
            <h2 className='text-lg font-semibold'>Menu</h2>
            <div className='flex flex-col ml-4 mt-2'>
            <a href="#" className='flex mb-2 bg-yellow-400  py-2 rounded-lg'>
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


            <h2 className='text-lg font-semibold'>Social</h2>
            <div className='flex flex-col ml-4 mt-2'>
            <a href="#" className='flex mb-2 py-2 rounded-lg'>
                <FaRegUser className='mt-1'/>
                <span className='ml-2'>Friends</span>
            </a>
            <a href="#" className='flex mb-2'>
                <FaUsers className='mt-1'/>
                <span className='ml-2'>Parties</span>
            </a>
        
            </div>

            <h2 className='text-lg font-semibold'>General</h2>
            <div className='flex flex-col ml-4 mt-2'>
            <a href="#" className='flex mb-2 py-2 rounded-lg'>
                <CiSettings className='mt-1'/>
                <span className='ml-2'>Settings</span>
            </a>
            <a href="#" className='flex mb-2'>
                <IoIosLogOut className='mt-1'/>
                <span className='ml-2'>Logout</span>
            </a>
           
            </div>

            <div className='bg-slate-300 p-5 absolute bottom-0 w-full rounded-xl'>
                <h3 className='font-bold text-2xl my-2'>50% DISCOUNT</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, vitae. Vero cum ullam laborum eligendi impedit minima sequi eveniet culpa, blanditiis nobis consectetur </p>
            </div>
        </div>
        
    </div>
  )
}

export default LeftBar