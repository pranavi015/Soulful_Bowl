'use client';
import { useRouter } from 'next/navigation';
import RecipeCard from './RecipeCard'; 
import recipes from '../data/recipes.json';


export default function LatestArticles() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/recipes');
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-serif mb-6">Latest Recipes</h2>
      <div className="flex flex-wrap gap-6">
        {recipes.slice(0, 4).map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleRedirect}
          className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition"
        >
          Load More 
        </button>
      </div>
    </section>
  );
}
