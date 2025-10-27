import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'

const Cars = () => {
  const [input,setInput] = useState('')

  return (
    <div>
      {/* Search bar */}
      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <Title title="Available Cars"  />
        <p className='text-sm text-gray-500'>Browse our wide selection of luxury and everyday vehicles for rent</p>
         {/*Search box */}
         <div className='flex items-center bg-white px-4 mt-6 max-w-180 w-full h-12 rounded-full shadow-lg'>
          <img src={assets.search_icon} className='w-4.5 h-4.5 mr-2'/>

         <input 
           onClick={(e)=> setInput(e.target.value)} value={input}
           type='text' 
           placeholder='Search by Model or features'
           className='flex-grow h-full outline-none text-gray-400'
         />
        <img src={assets.filter_icon} className='w-4.5 h-4.5 ml-2'/>
</div>


      </div>
      <div>
        
      </div>
        {/* Cars list */}
          
      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>
         <p className='ml-20'>Showing ({dummyCarData.length}) Cars</p>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl max-auto'>
           {dummyCarData.map((car,index)=>(
            <div key={index}>
               <CarCard car={car}/>
            </div>
           ))}
         </div>
      </div>


    </div>
  )
}

export default Cars
