'use client';
import RecipeCard from "./RecipeCard";
import { useState } from "react";

export default function FeaturedAfghan() {
  const recipes = [
    {
      "id": 148,
      "title": "Aushak - Afghan Dumplings",
      "image":
        "https://cdn.pickuplimes.com/cache/23/23/2323b912e4e344b8e81fe5e9cc99093e.jpg",
      "link": "https://www.pickuplimes.com/recipe/aushak-afghan-dumplings-686",
    },
    {
      "id": 149,
      "title": "Bolani - Afghan Stuffed Flatbread",
      "image":
        "https://cdn.pickuplimes.com/cache/4c/f9/4cf9035db376359489eb87974d061321.jpg",
      "link": "https://www.pickuplimes.com/recipe/bolani-afghan-stuffed-flatbread-684",
    },
    {
      "id": 150,
      "title": "Borani Banjan - Afghan Eggplant Dish",
      "image":
        "https://cdn.pickuplimes.com/cache/8d/1d/8d1d05ad51a9bf77ce66c296a8d430a7.jpg",
      "link": "https://www.pickuplimes.com/recipe/borani-banjan-afghan-eggplant-dish-688",
    },
    {
      "id": 151,
      "title": "Afghan Green Chutney",
      "image":
        "https://cdn.pickuplimes.com/cache/d8/f6/d8f606067f3941d3900bbaeb154e33cc.jpg",
      "link": "https://www.pickuplimes.com/recipe/afghan-green-chutney-238",
    },
    {
      "id": 152,
      "title": "Kichaloo Banjan - Afghan Potato Eggplant Dish",
      "image":
        "https://cdn.pickuplimes.com/cache/90/cf/90cfdc76dd15ba88f826492351b98c05.jpg",
      "link": "https://www.pickuplimes.com/recipe/kichaloo-banjan-afghan-potato-eggplant-dish-410",
    },
    {
      "id": 153,
      "title": "Shola - Afghan Savoury Sticky Rice",
      "image":
        "https://cdn.pickuplimes.com/cache/e0/7b/e07b39aacac8c4f5ca1a066aa7305bbf.jpg",
      "link": "https://www.pickuplimes.com/recipe/shola-afghan-savoury-sticky-rice-687",
    },
    {
      "id": 154,
      "title": "Salata - Afghan Salad",
      "image":
        "https://cdn.pickuplimes.com/cache/9f/fa/9ffa4da903a6184485df7aa17e80f2b0.jpg",
      "link": "https://www.pickuplimes.com/recipe/salata-afghan-salad-407",
    },
    {
      "id": 155,
      "title": "Shir Berinj - Afghan Rice Pudding",
      "image":
        "https://cdn.pickuplimes.com/cache/fb/70/fb7035a59dfb6fefd38d7944c29730e7.jpg",
      "link": "https://www.pickuplimes.com/recipe/shir-berinj-afghan-rice-pudding-685",
    },
    {
      "id": 156,
      "title": "Kitchiri - Herati Afghan Rice",
      "image":
        "https://cdn.pickuplimes.com/cache/3a/5e/3a5eeda840d0fc618f498dd5ef03a882.jpg",
      "link": "https://www.pickuplimes.com/recipe/kitchiri-herati-afghan-rice-689",
    },
      
  ];

  const initialVisibleCount = 8;
  const loadMoreCount = 4;

  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + loadMoreCount);
  };

  const visibleRecipes = recipes.slice(0, visibleCount);

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-serif mb-6">Afghan Delights</h2>

      <div className="flex flex-wrap gap-6">
        {visibleRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>

      {visibleCount < recipes.length && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}