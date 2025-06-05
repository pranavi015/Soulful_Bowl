
import FeaturedBreakie from "@/components/FeaturedBreakie";
import FeaturedDes from "@/components/FeaturedDes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <FeaturedBreakie/>
      <FeaturedDes/>
      <Footer/>
    </div>
  )
}

export default page

