import FeaturedVideos from '@/components/FeaturedVideos'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <FeaturedVideos/>
      <Footer/>
    </div>
  )
}

export default page
