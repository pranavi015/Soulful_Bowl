'use client';
import RecipeCard from "./RecipeCard";
import { useState } from "react";

export default function FeaturedBreakie() {
  const recipes = [
      {
        "id": 183,
        "title": "Cardamom Avocado & Blueberry Smoothie",
        "image":
          "https://cdn.pickuplimes.com/cache/85/a7/85a79114642cd5bf94b31fd9c7d2a838.jpg",
        "link": "https://www.pickuplimes.com/recipe/cardamom-avocado-blueberry-smoothie-318",
      },
      {
        "id": 184,
        "title": "Salted Caramel Smoothie Bowl",
        "image":
          "https://cdn.pickuplimes.com/cache/af/08/af084a7da5180b0c8acc9882137b805e.jpg",
        "link": "https://www.pickuplimes.com/recipe/salted-caramel-smoothie-bowl-498",
      },
      {
        "id": 185,
        "title": "The Extraordinary Green Smoothie Bowl",
        "image":
          "https://cdn.pickuplimes.com/cache/08/c9/08c97285464710a2ccfb30da96085c63.jpg",
        "link": "https://www.pickuplimes.com/recipe/the-extraordinary-green-smoothie-bowl-490",
      },
      {
        "id": 186,
        "title": "Raspberry Lemonade Smoothie Bowl",
        "image":
          "https://cdn.pickuplimes.com/cache/c1/28/c128faa61f5429c391e6667caf134f00.jpg",
        "link": "https://www.pickuplimes.com/recipe/raspberry-lemonade-smoothie-bowl-493",
      },
      {
        "id": 187,
        "title": "Sweet & Spicy Golden Smoothie Bowl",
        "image":
          "https://cdn.pickuplimes.com/cache/a6/8c/a68c309c2967a68169b39c1be72ba7a3.jpg",
        "link": "https://www.pickuplimes.com/recipe/sweet-spicy-golden-smoothie-bowl-497",
      },
      {
        "id": 129,
        "title": "Gingerbread Oatmeal with Caramelized Pear",
        "image":
          "https://cdn.pickuplimes.com/cache/73/42/7342d87de29238a1481dea246166b915.jpg",
        "link": "https://www.pickuplimes.com/recipe/gingerbread-oatmeal-with-caramelized-pear-731",
      },
      {
        "id": 130,
        "title": "Homemade Hazelnut Butter",
        "image":
          "https://cdn.pickuplimes.com/cache/08/78/0878196bfbcf0d7c7f61a353639fd3f9.jpg",
        "link": "https://www.pickuplimes.com/recipe/homemade-hazelnut-butter-783",
      },
      {
        "id": 131,
        "title": "Peppermint Mocha",
        "image":
          "https://cdn.pickuplimes.com/cache/bd/e3/bde3f89d254d12b0fdd602fd2c111306.jpg",
        "link": "https://www.pickuplimes.com/recipe/peppermint-mocha-737",
      },
      {
        "id": 140,
        "title": "Toasted Coconut & Almond Granola",
        "image":
          "https://cdn.pickuplimes.com/cache/64/5f/645fb895ceeefcfd33d5b6c1c0b821f5.jpg",
        "link": "https://www.pickuplimes.com/recipe/toasted-coconut-almond-granola-123",
      },
      {
        "id": 125,
        "title": "Blueberry Almond Oatmeal",
        "image":
          "https://cdn.pickuplimes.com/cache/a7/88/a7888d1136f399dc20943601f426a599.jpg",
        "link": "https://www.pickuplimes.com/recipe/blueberry-almond-oatmeal-729",
      },
      {
        "id": 126,
        "title": "Savoury Miso Sesame Oatmeal",
        "image":
          "https://cdn.pickuplimes.com/cache/ea/db/eadbb31221ef44b9e29004e076dabadf.jpg",
        "link": "https://www.pickuplimes.com/recipe/savoury-miso-sesame-oatmeal-736",
      },
      {
        "id": 127,
        "title": "Chipotle Spiced Black Bean Oatmeal",
        "image":
          "https://cdn.pickuplimes.com/cache/5d/6a/5d6abb2213a7b45a7be36a69ebb8e2b3.jpg",
        "link": "https://www.pickuplimes.com/recipe/chipotle-spiced-black-bean-oatmeal-778",
      },
      {
        "id": 128,
        "title": "Mocha Hazelnut Oatmeal",
        "image":
          "https://cdn.pickuplimes.com/cache/e7/55/e755d300240e4c1600ae23451b21cd0e.jpg",
        "link": "https://www.pickuplimes.com/recipe/mocha-hazelnut-oatmeal-732",
      },
      {
        "id": 162,
        "title": "Banana Coffee Muffins",
        "image":
          "https://cdn.pickuplimes.com/cache/c8/14/c814a184a49a5a0de75a691ec9fb6624.jpg",
        "link": "https://www.pickuplimes.com/recipe/banana-coffee-muffins-325",
      },
      {
        "id": 174,
        "title": "Double Chocolate Granola",
        "image":
          "https://cdn.pickuplimes.com/cache/19/0e/190e387dd3257d48e4ed9f95d1af48c2.jpg",
        "link": "https://www.pickuplimes.com/recipe/double-chocolate-granola-576",
      },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleRecipes = recipes.slice(0, visibleCount);

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-serif mb-6">Wholesome Breakfast</h2>
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

