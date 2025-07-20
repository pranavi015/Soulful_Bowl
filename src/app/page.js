import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import SearchRecipes from '@/components/searchRecipes';
import SearchArtices from '@/components/SearchArticles';
import LatestRecipes from '@/components/LatestRecipes';
import LatestArticles from '@/components/LatestArticles';
import styles from '@/app/styles/MyComponent.module.css';

// export default function MyComponent() {
//   return <div className={styles.container}>Styled with CSS Module</div>;
// }

// import RecipesPage from './recipes/recipes';

export default function HomePage() {
  return (
    <div>
      <div className={styles.top}>
      <Navbar/>
      </div>
      
      <div className={styles.container}>
      <SearchRecipes/>
      <LatestRecipes/>
      <SearchArtices/>
      <LatestArticles/>
      <Footer/>
      {/* return <div className={styles.container}>Styled with CSS Module</div>; */}
      </div>
    </div>
  )
};