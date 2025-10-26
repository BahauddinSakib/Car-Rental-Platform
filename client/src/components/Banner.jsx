import React from 'react'
import { assets } from '../assets/assets'

function Banner() {
  return (
    <div
      className='flex flex-col md:flex-row md:items-start 
      items-center justify-between px-8 md:pl-14 pt-10 
       bg-gradient-to-r from-[#0D47A1] via-[#512DA8] to-[#8E24AA]
      max-w-6xl mx-auto rounded-2xl overflow-hidden'
    >
      <div className='text-white md:w-1/2'>
        <h2 className='text-3xl font-medium'>Do you own a luxury car?</h2>
        <p className='mt-2'>
          Monetize your vehicle effortlessly by listing it on CarRental.
        </p>
        <p className='mt-2'>
          We take care of insurance, driver verification, and secure payments —
          so you can earn passive income, stress-free.
        </p>
        <button
          className='px-6 py-2 bg-white hover:bg-slate-100 
          transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'
        >
          List your Car
        </button>
      </div>

      <img
        src={assets.banner_car_image2}
        alt='banner'
        className='max-h-60 mt-10 md:mt-0 md:max-h-72'
      />
    </div>
  )
}

export default Banner
