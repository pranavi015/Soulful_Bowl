'use client';

import { useRouter } from "next/navigation"; 
import articles from "../data/articles.json";
import RecipeCard from "./RecipeCard";

export default function LatestArticles() {
  const router = useRouter(); 

  const handleRedirect = () => {
    router.push('/articles');
  };

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-serif mb-6">Latest articles</h2>
      <div className="flex flex-wrap gap-6">
        {articles.slice(0, 4).map((article) => (
          <RecipeCard key={article.id} {...article} />
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
