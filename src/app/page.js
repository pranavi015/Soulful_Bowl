import React from 'react';
import Navbar from '../components/Navbar';
import FeaturedRecipes from '../components/FeaturedRecipes';
import Footer from '../components/Footer'
import Articles from '../components/Articles';
import SearchRecipes from '@/components/searchRecipes';


// import RecipesPage from './recipes/recipes';

export default function HomePage() {
  return (
    <div>
    <Navbar/>
    <SearchRecipes/>
    <Footer/>
    </div>
  )
};