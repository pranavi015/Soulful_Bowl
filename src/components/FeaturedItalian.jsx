'use client';
import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function FeaturedItalian() {
  const recipes =[
      {
        "id": 2,
        "title": "Eggplant Pesto Orzo",
        "image":
          "https://cdn.pickuplimes.com/cache/c5/0d/c50d5f8c5ac09a1ce1ff8bc35324e342.jpg",
        "link": "https://www.pickuplimes.com/recipe/eggplant-orzo-2361",
      },
      {
        "id": 30,
        "title": "Restaurant-Style Carbonara",
        "image":
          "https://cdn.pickuplimes.com/cache/c4/3e/c43e2743155bdcf7aa54115774e07fae.jpg",
        "link": "https://www.pickuplimes.com/recipe/restaurant-style-carbonara-1846",
      },
      {
        "id": 10,
        "title": "Creamy Gnocchi Soup",
        "image":
          "https://cdn.pickuplimes.com/cache/8f/80/8f80153654ddfd3cb9725612b1c3146c.jpg",
        "link": "https://www.pickuplimes.com/recipe/creamy-gnocchi-soup-2657",
      },
      {
        "id": 21,
        "title": "Creamy Alfredo Style high protein Pasta",
        "image":
          "https://cdn.pickuplimes.com/cache/6e/74/6e74cb28093a4dd9d6be11156ecd7e2e.jpg",
        "link": "https://www.pickuplimes.com/recipe/creamy-alfredo-style-high-protein-pasta-2417",
      },
      {
        "id": 31,
        "title": "Creamy Red Pesto Gnocchi",
        "image":
          "https://cdn.pickuplimes.com/cache/25/34/253470f6456c3a04851997f00dd43048.jpg",
        "link": "https://www.pickuplimes.com/recipe/creamy-red-pesto-gnocchi-1965",
      },
      {
        "id": 32,
        "title": "Simple Vegan Parmesan",
        "image":
          "https://cdn.pickuplimes.com/cache/02/77/027778b598921989485ee9b16c1bcb93.jpg",
        "link": "https://www.pickuplimes.com/recipe/simple-vegan-parmesan-488",
      },
      {
        "id": 61,
        "title": "Creamy Tomato Orzo",
        "image":
          "https://cdn.pickuplimes.com/cache/05/82/058255924f445bfe683c5d72d9d8c4aa.jpg",
        "link": "https://www.pickuplimes.com/recipe/creamy-tomato-orzo-1326",
      },
      {
        "id": 1,
        "title": "Buffalo Pasta Salad",
        "image":
          "https://cdn.pickuplimes.com/cache/a5/e8/a5e8ccc057f06a3e962723341601d847.jpg",
        "link": "https://www.pickuplimes.com/recipe/buffalo-pasta-salad-1530",
      },
      {
        "id": 435,
        "title": "Beetroot & Red Cabbage Sauerkraut",
        "image":
          "https://cdn.pickuplimes.com/cache/85/71/8571124f3e586073644559049ba6b673.jpg",
        "link": "https://www.pickuplimes.com/recipe/beetroot-red-cabbage-sauerkraut-281",
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
    <h2 className="text-3xl font-serif mb-6">Italian 🇮🇹</h2>
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

// export default function FeaturedItalian() {
//   return (
//     <div>
      
//     </div>
//   )
// }
