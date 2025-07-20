
import FeaturedAfghan from "@/components/FeaturedAfghan";
import FeaturedBreakie from "@/components/FeaturedBreakie";
import FeaturedDes from "@/components/FeaturedDes";
import FeaturedItalian from "@/components/FeaturedItalian";
import FeaturedSalads from "@/components/FeaturedSalads";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from '@/app/styles/MyComponent.module.css';
import React from 'react'

const page = () => {
  return (
    <div>
      <div className={styles.top}>
      <Navbar/>
      </div>
      <div className={styles.container}>
      <FeaturedBreakie/>
      <FeaturedItalian/>
      <FeaturedSalads/>
      <FeaturedAfghan/>
      <FeaturedDes/>
      <Footer/>
      </div>
    </div>
  )
}

export default page

