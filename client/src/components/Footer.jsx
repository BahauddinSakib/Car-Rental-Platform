import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
  <div className="flex flex-col md:flex-row items-start justify-center gap-15 md:gap-x-60 py-10 border-b border-gray-500/30">

          
          <div className="max-w-96">
             <img src={assets.logo} alt='logo' className=' h-8 md:h-9'/>
              <p className="max-w-80 mt-3 ">
                  Premium Car rental service with a wide selection of luxury and everyday vehicles for all your driving needs. 
              </p>
              <div className="flex items-center gap-2 mt-6">
                  <a href="#"><img src={assets.facebook_logo} alt='facebook' className='w-5 h-5'/></a>
                  <a href="#"><img src={assets.instagram_logo} alt='instagram' className='w-5 h-5'/></a>
                  <a href="#"><img src={assets.twitter_logo} alt='twitter' className='w-5 h-5'/></a>
                  <a href="#"><img src={assets.gmail_logo} alt='gmail' className='w-5 h-5'/></a>
              </div>
          </div>

          <div>
                  <h2 className="text-base font-medium text-gray-800">COMPANY</h2>
                  <div className="text-sm text-gray-500 space-y-2 list-none">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Browse Cars</a></li>
                      <li><a href="#">List Your Cars</a></li>
                      <li><a href="#">About Us</a></li>
                  </div>
              </div>

              <div>
                  <h2 className="text-base font-medium text-gray-800">Recources</h2>
                  <div className="text-sm text-gray-500 space-y-2 list-none">
                      <li><a href="#">Help Center</a></li>
                      <li><a href="#">Term Of Service</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Insurance</a></li>
                  </div>
              </div>

      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 ©Bahauddin Sakib. All Right Reserved.
      </p>
    </footer>
  )
}

export default Footer

