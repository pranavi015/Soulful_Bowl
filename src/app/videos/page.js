import FeaturedVideos from '@/components/FeaturedVideos'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import styles from '@/app/styles/MyComponent.module.css';
import React from 'react'

const page = () => {
  return (
    <div>
      <div className={styles.top}>
        <Navbar/>
      </div>
      <div className={styles.container}>
        <FeaturedVideos/>
        <Footer/>
      </div>
    </div>
  )
}

export default page
