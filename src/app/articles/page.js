import Articles from '@/components/Articles'
import Navbar from '@/components/Navbar'
import React from 'react'

const ArticleCard = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-row justify-center mt-7 font-bold text-3xl'>
        <h1>Latest Articles</h1>
      </div>
      <Articles/>
    </div>
  )
}

export default ArticleCard


