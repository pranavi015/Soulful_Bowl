
import Articles from '@/components/Articles'
import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '@/app/styles/MyComponent.module.css';

const ArticleCard = () => {
  return (
    <div>
      <div className={styles.top}>
      <Navbar/>
      </div>
      <div className={styles.container}>
      <Articles/>
      </div>
    </div>
  )
}

export default ArticleCard


