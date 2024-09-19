import React from 'react';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import { FaMapMarkerAlt, FaStar, FaFilter } from 'react-icons/fa';

const HeroSection = () => {
  const cardText = (
    <div className='absolute bottom-4 left-4 text-white'>
      <h2 className='text-xl font-bold'>Mountain</h2>
      <div className='flex items-center'>
        <FaMapMarkerAlt className='mr-2' />
        <span>Lorem ipsum</span>
        <div className='flex items-center ml-4'>
          <FaStar className='text-yellow-400 mr-1' />
          <span>4.5</span>
        </div>
      </div>
    </div>
  );

  const lineItem = (
    <div className='flex items-center space-x-4 mb-4'>
      <div className='w-16 h-16 bg-gray-400 rounded-lg overflow-hidden'>
        <img src={card1} alt="card1" className='w-full h-full object-cover' />
      </div>
      <div className='text-gray-800 flex flex-col justify-center'>
        <h2 className='text-lg font-bold mb-2'>Mountain</h2>
        <div className='flex items-center mb-2'>
          <FaMapMarkerAlt className='mr-2 text-gray-600' />
          <span>Lorem ipsum</span>
          <div className='flex items-center ml-4'>
            <FaStar className='text-yellow-400 mr-1' />
            <span>4.5</span>
          </div>
        </div>
      </div>
      <div className='text-gray-800 font-bold'>
        <span>10% per day</span>
      </div>
    </div>
  );

  return (
    <div className='my-6 flex flex-col h-[600px]'>
      <div className='flex justify-between px-8 mb-6 flex-grow'>
        <div className='relative w-[22%] h-full'>
          <img src={card1} alt="card1" className='rounded-xl w-full h-full object-cover' />
          {cardText}
        </div>
        <div className='relative w-[22%] h-full'>
          <img src={card2} alt="card2" className='rounded-xl w-full h-full object-cover' />
          {cardText}
        </div>
        <div className='relative w-[22%] h-full'>
          <img src={card3} alt='card3' className='rounded-xl w-full h-full object-cover' />
          {cardText}
        </div>
        <div className='relative w-[22%] h-full'>
          <img src={card4} alt="card4" className='rounded-xl w-full h-full object-cover' />
          {cardText}
        </div>
      </div>

      <div className='flex px-8 flex-grow'>
        <div className='bg-gray-300 w-[35%] h-[300px] rounded-lg relative'>
          <div className='absolute top-4 left-4'>
            <h2 className='text-xl font-bold text-gray-800'>Best Trips</h2>
          </div>
          <a href="#" className='absolute top-4 right-4 flex items-center bg-yellow-400 px-4 py-2 rounded-lg'>
            <FaFilter className='text-white' />
            <span className='ml-2 text-white'>Filter</span>
          </a>
          <div className='absolute bottom-10 left-4 ml-10 mr-10'>
            {lineItem}
            {lineItem}
          </div>
        </div>

        <div className='bg-gray-400 w-[64%] h-[300px] rounded-lg ml-4 relative'>
          <img src={card5} alt="card3" className='w-full h-full object-cover rounded-lg' />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
            <h2 className='text-5xl font-bold mb-4 whitespace-nowrap'>Road from Island to Island</h2>
            <div className='flex flex-col items-center text-xl'>
              <div className='flex items-center mb-2'>
                <span className='mr-2'>From</span>
                <FaMapMarkerAlt className='mr-2' />
                <span>Bora Bora</span>
              </div>
              <div className='flex items-center mb-4'>
                <span className='mr-2'>To</span>
                <FaMapMarkerAlt className='mr-2' />
                <span>Santorini</span>
              </div>
              <a href="#" className='inline-flex items-center bg-yellow-400 px-4 py-2 rounded-lg'>
                <span className='text-white text-lg font-bold px-10 py-1'>Book Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


