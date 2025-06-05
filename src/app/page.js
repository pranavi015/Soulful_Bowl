import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import SearchRecipes from '@/components/searchRecipes';
import SearchArtices from '@/components/SearchArticles';
import RecipeCard from '@/components/RecipeCard';
import LatestRecipes from '@/components/LatestRecipes';
import LatestArticles from '@/components/LatestArticles';


// import RecipesPage from './recipes/recipes';

export default function HomePage() {
  return (
    <div>
    <Navbar/>
    <SearchRecipes/>
    <LatestRecipes/>
    <SearchArtices/>
    <LatestArticles/>
    <Footer/>
    </div>
  )
};