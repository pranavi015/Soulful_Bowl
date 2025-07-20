'use client';
import RecipeCard from "./RecipeCard";
import { useState } from "react";

export default function FeaturedBreakie() {
  const recipes = [
    {
        "id": 183,
        "title": "Cardamom Avocado & Blueberry Smoothie",
        "image": "https://cdn.pickuplimes.com/cache/85/a7/85a79114642cd5bf94b31fd9c7d2a838.jpg",
        "link": "https://www.pickuplimes.com/recipe/cardamom-avocado-blueberry-smoothie-318",

      },
      {
        "id": 184,
        "title": "Salted Caramel Strawberry Smoothie Bowl",
        "image": "https://cdn.pickuplimes.com/cache/af/08/af084a7da5180b0c8acc9882137b805e.jpg",
        "link": "https://www.pickuplimes.com/recipe/salted-caramel-smoothie-bowl-498",
       
      },
      {
        "id": 185,
        "title": "The Extraordinary Green Smoothie Bowl",
        "image": "https://cdn.pickuplimes.com/cache/08/c9/08c97285464710a2ccfb30da96085c63.jpg",
        "link": "https://www.pickuplimes.com/recipe/the-extraordinary-green-smoothie-bowl-490",
        
      },
      {
        "id": 186,
        "title": "Raspberry Lemonade Smoothie Bowl",
        "image": "https://cdn.pickuplimes.com/cache/c1/28/c128faa61f5429c391e6667caf134f00.jpg",
        "link": "https://www.pickuplimes.com/recipe/raspberry-lemonade-smoothie-bowl-493",
        
      },
      {
        "id": 187,
        "title": "Sweet & Spicy Golden Smoothie Bowl",
        "image": "https://cdn.pickuplimes.com/cache/a6/8c/a68c309c2967a68169b39c1be72ba7a3.jpg",
        "link": "https://www.pickuplimes.com/recipe/sweet-spicy-golden-smoothie-bowl-497",
        
      },
      {
        "id": 129,
        "title": "Gingerbread Oatmeal with Caramelized Pear",
        "image": "https://cdn.pickuplimes.com/cache/73/42/7342d87de29238a1481dea246166b915.jpg",
        "link": "https://www.pickuplimes.com/recipe/gingerbread-oatmeal-with-caramelized-pear-731",
        
      },
      {
        "id": 125,
        "title": "Blueberry Almond Banana Oatmeal",
        "image": "https://cdn.pickuplimes.com/cache/a7/88/a7888d1136f399dc20943601f426a599.jpg",
        "link": "https://www.pickuplimes.com/recipe/blueberry-almond-oatmeal-729",
       
      },
      {
        "id": 140,
        "title": "Toasted Coconut & Almond Granola",
        "image": "https://cdn.pickuplimes.com/cache/64/5f/645fb895ceeefcfd33d5b6c1c0b821f5.jpg",
        "link": "https://www.pickuplimes.com/recipe/toasted-coconut-almond-granola-123",
        
      },
      {
        "id": 359,
        "title": "Nourishing Coconut Milk Oatmeal",
        "image":
          "https://cdn.pickuplimes.com/cache/34/1c/341c9fc362c410d9371bc48d220595b7.jpg",
        "link": "https://www.pickuplimes.com/recipe/nourishing-coconut-milk-oatmeal-189",
      },
      {
        "id": 360,
        "title": "Hazelnut Granola Breakfast Bars",
        "image":
          "https://cdn.pickuplimes.com/cache/57/1e/571ef28291a7a2658dea22c1ef95e0d0.jpg",
        "link": "https://www.pickuplimes.com/recipe/hazelnut-granola-breakfast-bars-188",
      },
      {
        "id": 127,
        "title": "Chipotle Spiced Black Bean Oatmeal",
        "image": "https://cdn.pickuplimes.com/cache/5d/6a/5d6abb2213a7b45a7be36a69ebb8e2b3.jpg",
        "link": "https://www.pickuplimes.com/recipe/chipotle-spiced-black-bean-oatmeal-778",
        
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
      <h2 className="text-3xl font-serif mb-6">Nourishing Breakfast</h2>
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
