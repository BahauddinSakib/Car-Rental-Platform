import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

function Hero() {
  const [pickupLocation, setPickupLocation] = useState('')

  // Get today's date in YYYY-MM-DD format 
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      {/* Heading */}
      <h1 className='text-4xl md:text-5xl font-semibold'>
        Luxury Cars on Rent
      </h1>

      {/* Search Form */}
      <form
        className='flex flex-col md:flex-row items-start md:items-center justify-between 
        p-6 rounded-lg md:rounded-full w-full max-w-70 md:max-w-200 bg-white 
        shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'
      >
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8'>

          {/* Pickup location */}
          <div className='flex flex-col items-start gap-5'>
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className='cursor-pointer rounded-md px-3 -my-1  outline-none focus:ring-0 focus:outline-none bg-transparent'
            >
              <option value='' disabled>
                Pickup Location
              </option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className='px-4 text-sm text-gray-500'>
              {pickupLocation ? pickupLocation : 'Please select a location'}
            </p>
          </div>

          {/* Pickup date */}
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor='pickup-date'>Pick-up Date</label>
            <input
              type='date'
              id='pickup-date'
              min={today}
              className='rounded-md px-3 py-2 text-sm text-gray-500 outline-none focus:ring-0 focus:outline-none bg-transparent'
              required
            />
          </div>

          {/* Return date */}
          <div className='flex flex-col items-start gap-2'>
            <label htmlFor='return-date'>Return Date</label>
            <input
              type='date'
              id='return-date'
              min={today}
              className='rounded-md px-3 py-2 text-sm text-gray-500 outline-none focus:ring-0 focus:outline-none bg-transparent'
              required
            />
          </div>


        </div>

                {/* Search Button */}
         <button
            type='submit'
            className='flex items-center justify-center gap-1 px-8 py-3 max-sm:mt-4
            bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer transition-all'
          >
            <img
              src={assets.search_icon}
              alt='search'
              className='brightness-200 h-4 w-4'
            />
            Search
          </button>

      </form>

      {/* Hero Image */}
      <img src={assets.main_car2} alt='car' className='max-h-72 object-contain' />
    </div>
  )
}

export default Hero
