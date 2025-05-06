'use client';
export async function GET() {
  return Response.json({
    recipes: [
    {
      "id": 1,
      "title": "Buffalo Pasta Salad",
      "image":
        "https://cdn.pickuplimes.com/cache/a5/e8/a5e8ccc057f06a3e962723341601d847.jpg",
      "link": "https://www.pickuplimes.com/recipe/buffalo-pasta-salad-1530",
    },
    {
      "id": 2,
      "title": "Eggplant Pesto Orzo",
      "image":
        "https://cdn.pickuplimes.com/cache/c5/0d/c50d5f8c5ac09a1ce1ff8bc35324e342.jpg",
      "link": "https://www.pickuplimes.com/recipe/eggplant-orzo-2361",
    },
    {
      "id": 3,
      "title": "Peanut Granola",
      "image":
        "https://cdn.pickuplimes.com/cache/6f/6e/6f6efb8aec1c1cce2ccf1e76b14b8d74.jpg",
      "link": "https://www.pickuplimes.com/recipe/peanut-granola-2027",
    },
    {
      "id": 4,
      "title": "Homemade Vegan Mayonnaise",
      "image":
        "https://cdn.pickuplimes.com/cache/4e/ab/4eaba71cf6aac8ceefc5367d081d7fd4.jpg",
      "link": "https://www.pickuplimes.com/recipe/homemade-vegan-mayonnaise-946",
    },
    {
      "id": 5,
      "title": "The Best All-Purpose Stir Fry Sauce!",
      "image":
        "https://cdn.pickuplimes.com/cache/38/7b/387b82ae5558575b3b7da30d65fb069c.jpg",
      "link": "https://www.pickuplimes.com/recipe/the-best-all-purpose-stir-fry-sauce-2659",
    },
    {
      "id": 6,
      "title": "Classic Vanilla Cake",
      "image":
        "https://cdn.pickuplimes.com/cache/c2/7d/c27dc0c93d71e7c91bf473f8a7e52b6f.jpg",
      "link": "https://www.pickuplimes.com/recipe/classic-vegan-vanilla-cake-887",
    },
    {
      "id": 7,
      "title": "Baked Donuts",
      "image":
        "https://cdn.pickuplimes.com/cache/83/73/8373406f385c18203b43aa755c7bb4a3.jpg",
      "link": "https://www.pickuplimes.com/recipe/vegan-baked-donuts-682",
    },
    {
      "id": 8,
      "title": "The Best Brownies Ever",
      "image":
        "https://cdn.pickuplimes.com/cache/98/5a/985a62a1edf08faf440d0982a4b48a8b.jpg",
      "link": "https://www.pickuplimes.com/recipe/the-best-brownies-ever-1216",
    },
    {
      "id": 9,
      "title": "Simple Spicy Chili",
      "image":
        "https://cdn.pickuplimes.com/cache/2b/a7/2ba73b7bf3ae5f2d4cd29e15688cdcf4.jpg",
      "link": "https://www.pickuplimes.com/recipe/simple-spicy-chili-1844",
    },
    {
      "id": 10,
      "title": "Creamy Gnocchi Soup",
      "image":
        "https://cdn.pickuplimes.com/cache/8f/80/8f80153654ddfd3cb9725612b1c3146c.jpg",
      "link": "https://www.pickuplimes.com/recipe/creamy-gnocchi-soup-2657",
    },
    {
      "id": 11,
      "title": "Smokey Lentil Stew with Aioli",
      "image":
        "https://cdn.pickuplimes.com/cache/dd/8c/dd8c30030b425c9d444cb770b04b4bbf.jpg",
      "link": "https://www.pickuplimes.com/recipe/smokey-lentil-stew-with-aioli-1861",
    },
    {
      "id": 12,
      "title": "Aioli - Garlic Mayo",
      "image":
        "https://cdn.pickuplimes.com/cache/57/74/57741612fd6ab46ecb83cec8ff38452f.jpg",
      "link": "https://www.pickuplimes.com/recipe/aioli-garlic-mayo-1862",
    },
    ]
});
}

import { useEffect, useState } from 'react';

export default function FeaturedRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('/api/recipes');
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Featured Recipes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <a
              key={recipe.id}
              href={recipe.link}
              target="_blank"
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {recipe.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
