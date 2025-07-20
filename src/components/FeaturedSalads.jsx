'use client';
import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function FeaturedSalads() {
  const recipes =[
    {
        "id": 179,
        "title": "Vegan Caesar Salad",
        "image":
          "https://cdn.pickuplimes.com/cache/06/ef/06efa7f8218e3d0f374318fa4101c980.jpg",
        "link": "https://www.pickuplimes.com/recipe/vegan-caesar-salad-489",
    },
    {
        "id": 180,
        "title": 'Spinach, Blueberry & "Feta" Salad',
        "image":
          "https://cdn.pickuplimes.com/cache/55/b2/55b2ee81a4b1b6181c8daec400d4d069.jpg",
        "link": "https://www.pickuplimes.com/recipe/spinach-blueberry-feta-salad-495",
    },
    {
        "id": 229,
        "title": "Vegan 'Egg' Salad Breakfast Bowl",
        "image":
          "https://cdn.pickuplimes.com/cache/a9/4e/a94e7d5bf8775b8adc768cf74ddc5f7e.jpg",
        "link": "https://www.pickuplimes.com/recipe/vegan-egg-salad-breakfast-bowl-48",
    },
    {
        "id": 26,
        "title": "Smashed Potato Salad",
        "image":
          "https://cdn.pickuplimes.com/cache/d7/82/d7829754b9bf8f9cbd12c9aadd90f136.jpg",
        "link": "https://www.pickuplimes.com/recipe/smashed-potato-salad-2005",
      },
      {
        "id": 27,
        "title": "Potato Pesto Salad",
        "image":
          "https://cdn.pickuplimes.com/cache/c3/1f/c31fc9020616eb25d639af0d46b885b5.jpg",
        "link": "https://www.pickuplimes.com/recipe/potato-pesto-salad-1446",
      },
      {
        "id": 28,
        "title": "Tangy Potato Salad",
        "image":
          "https://cdn.pickuplimes.com/cache/41/b7/41b76ab0c5986a953964d37eb8a1e526.jpg",
        "link": "https://www.pickuplimes.com/recipe/tangy-potato-salad-2004",
      },
      {
        "id": 29,
        "title": "Roasted Sweet Potato & Kale Salad",
        "image":
          "https://cdn.pickuplimes.com/cache/70/04/700408cf3e8eb5d6727cf08cbcd8146d.jpg",
        "link": "https://www.pickuplimes.com/recipe/roasted-sweet-potato-kale-salad-441",
      },
    {
        "id": 123,
        "title": "Chickpea Caesar Salad Wrap",
        "image":
          "https://cdn.pickuplimes.com/cache/40/8c/408ced475b53ee19925383852a49bfe4.jpg",
        "link": "https://www.pickuplimes.com/recipe/chickpea-caesar-salad-wrap-679",
      },
      {
        "id": 432,
        "title": "Beetroot Quinoa Salad with Orange Ginger Dressing",
        "image":
          "https://cdn.pickuplimes.com/cache/d7/06/d706f09d0db3297d31d01e2c29d58e47.jpg",
        "link": "https://www.pickuplimes.com/recipe/beetroot-quinoa-salad-with-an-orange-ginger-dressing-278",
      },
      {
        "id": 124,
        "title": "Dill Pasta Salad with a Tahini Dressing",
        "image":
          "https://cdn.pickuplimes.com/cache/c3/e5/c3e55119c2cbdbca28257c0b1a7a797f.jpg",
        "link": "https://www.pickuplimes.com/recipe/dill-pasta-salad-with-a-tahini-dressing-267",
      },
      {
        "id": 158,
        "title": "Roasted Vegetable Salad with Crispy Chickpeas",
        "image":
          "https://cdn.pickuplimes.com/cache/91/15/911573cdc59637de8834663bcda213a6.jpg",
        "link": "https://www.pickuplimes.com/recipe/roasted-vegetable-salad-with-crispy-chickpeas-596",
      },
      {
        "id": 159,
        "title": "Macaroni Salad with Lentil Quesadillas",
        "image":
          "https://cdn.pickuplimes.com/cache/2e/32/2e32987da7dd54e7e9894089460d7071.jpg",
        "link": "https://www.pickuplimes.com/recipe/macaroni-salad-with-lentil-quesadillas-592",
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
    <h2 className="text-3xl font-serif mb-6">Fresh Salad Meals</h2>
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