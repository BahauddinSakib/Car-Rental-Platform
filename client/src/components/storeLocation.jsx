import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function StoreLocation() {
  const position = [40.742054, -73.986581] // New York coordinates

  return (
    <div className='px-8 py-6 max-w-6xl mx-auto'>
      <h2 className='text-3xl font-semibold text-center mb-8 text-black'>
        Our Store Location
      </h2>

      <div className='bg-gradient-to-r from-[#0D47A1] via-[#512DA8] to-[#8E24AA] shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8'>
        {/* Store Info */}
        <div className='flex-1 text-white space-y-2'>
          <h3 className='text-2xl font-bold'>New York Store</h3>
          <p className='text-lg'>123 Madison Ave, New York, NY 10010</p>
          <p>Phone: +1 (212) 555-1234</p>
          <p>Email: mycstore@gmail.com</p>
          <p>Working Hours: Mon-Sat, 9:00 AM - 7:00 PM</p>
          <p>Services: Luxury car rentals, insurance support, verified drivers</p>
        </div>

        {/* Map */}
        <div className='flex-1 w-full md:w-[550px] h-[300px] rounded-lg overflow-hidden shadow-lg'>
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={position}>
              <Popup>New York Store Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default StoreLocation
