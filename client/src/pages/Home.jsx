import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import StoreLocation from '../components/storeLocation'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
       <Hero/>
       <FeaturedSection />
       <Banner/>
       <Testimonial/>
       <StoreLocation/>
       
      
    </>
  )
}

export default Home
