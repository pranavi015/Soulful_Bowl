
import FeaturedAfghan from "@/components/FeaturedAfghan";
import FeaturedBreakie from "@/components/FeaturedBreakie";
import FeaturedDes from "@/components/FeaturedDes";
import FeaturedItalian from "@/components/FeaturedItalian";
import FeaturedSalads from "@/components/FeaturedSalads";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <FeaturedBreakie/>
      <FeaturedItalian/>
      <FeaturedSalads/>
      <FeaturedAfghan/>
      <FeaturedDes/>
      <Footer/>
    </div>
  )
}

export default page

