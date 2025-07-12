// import RecipeCard from "./RecipeCard";

// export default function FeaturedDes() {
//   const recipes = [
//       {
//         "id": 108,
//         "title": "Vegan Chocolate Fudge",
//         "image":
//           "https://cdn.pickuplimes.com/cache/ef/f0/eff07880d366d8a04b560bf483bb853e.jpg",
//         "link": "https://www.pickuplimes.com/recipe/vegan-chocolate-fudge-723",
//       },
//       {
//         "id": 116,
//         "title": "Vegan Chocolate Cake",
//         "image":
//           "https://cdn.pickuplimes.com/cache/3e/db/3edbe8d2b6690ce42b4bbc5a81f42afc.jpg",
//         "link": "https://www.pickuplimes.com/recipe/easy-vegan-chocolate-cake-74",
//       },
//       {
//         "id": 117,
//         "title": "Vegan Chocolate Buttercream Frosting",
//         "image":
//           "https://cdn.pickuplimes.com/cache/e9/a8/e9a8b0102ca2ee0436f2bc67ad0a3a9f.jpg",
//         "link": "https://www.pickuplimes.com/recipe/vegan-chocolate-buttercream-frosting-843",
//       },
//       {
//         "id": 174,
//         "title": "Double Chocolate Granola",
//         "image":
//           "https://cdn.pickuplimes.com/cache/19/0e/190e387dd3257d48e4ed9f95d1af48c2.jpg",
//         "link": "https://www.pickuplimes.com/recipe/double-chocolate-granola-576",
//       },
//       {
//         "id": 164,
//         "title": "Pretzel Stuffed Dates",
//         "image":
//           "https://cdn.pickuplimes.com/cache/4a/9b/4a9b8b40ba17cd0df0956a0937aa41e5.jpg",
//         "link": "https://www.pickuplimes.com/recipe/pretzel-stuffed-dates-653",
//         tags: ["15 min", "Dessert", "No cook", "5 ingredients"],
//       },
//       {
//         "id": 165,
//         "title": "Peanut Butter Cookie Dough Energy Balls",
//         "image":
//           "https://cdn.pickuplimes.com/cache/ce/2e/ce2e6c399256d572164c963fa1952fe5.jpg",
//         "link": "https://www.pickuplimes.com/recipe/peanut-butter-cookie-dough-energy-balls-650",
//         tags: ["10 min", "Snack", "Gluten-free", "No cook"],
//       },
//       {
//         "id": 44,
//         "title": "Chocolate Peppermint Truffles",
//         "image":
//           "https://cdn.pickuplimes.com/cache/3e/21/3e21ace314482ba8dcbec523225c075e.jpg",
//         "link": "https://www.pickuplimes.com/recipe/chocolate-peppermint-truffles-1724",
//         tags: ["30 min", "Snack", "Homemade staple", "Budget-friendly"],
//       },
//       {
//         "id": 45,
//         "title": "Vanilla Chai Spiced Latte Mix",
//         "image":
//           "https://cdn.pickuplimes.com/cache/66/58/6658579a0d5bc8fc99f042d95442c39d.jpg",
//         "link": "https://www.pickuplimes.com/recipe/vanilla-chai-spiced-latte-mix-899",
//         tags: ["15 min", "Homemade staple", "5 ingredients"],
//       },

//   ];

//   return (
//     <section className="px-6 py-10">
//       <h2 className="text-3xl font-serif mb-6">Sweet Delights</h2>
//       <div className="flex flex-wrap gap-6">
//         {recipes.map((recipe, index) => (
//           <RecipeCard key={index} {...recipe} />
//         ))}
//       </div>
//     </section>
//   );
// }
 
// 'use client';
// import { useState } from "react";
// import RecipeCard from "./RecipeCard";

// export default function FeaturedDes() {
//   const recipes = [
//     {
//       id: 1,
//       title: "Double Chocolate Granola",
//       image: "https://cdn.pickuplimes.com/cache/19/0e/190e387dd3257d48e4ed9f95d1af48c2.jpg",
//       link: "https://www.pickuplimes.com/recipe/double-chocolate-granola-576",
//       tags: ["30 min", "Snack", "Homemade staple", "Budget-friendly"],
//     },
//     {
//       id: 2,
//       title: "Pretzel Stuffed Dates",
//       image: "https://cdn.pickuplimes.com/cache/4a/9b/4a9b8b40ba17cd0df0956a0937aa41e5.jpg",
//       link: "https://www.pickuplimes.com/recipe/pretzel-stuffed-dates-653",
//       tags: ["15 min", "Dessert", "No cook", "5 ingredients"],
//     },
//     {
//       "id": 165,
//       "title": "Peanut Butter Cookie Dough Energy Balls",
//       "image":
//         "https://cdn.pickuplimes.com/cache/ce/2e/ce2e6c399256d572164c963fa1952fe5.jpg",
//       "link": "https://www.pickuplimes.com/recipe/peanut-butter-cookie-dough-energy-balls-650",
//       tags: ["10 min", "Snack", "Gluten-free", "No cook"],
//     },
//     {
//       "id": 44,
//       "title": "Chocolate Peppermint Truffles",
//       "image":
//         "https://cdn.pickuplimes.com/cache/3e/21/3e21ace314482ba8dcbec523225c075e.jpg",
//       "link": "https://www.pickuplimes.com/recipe/chocolate-peppermint-truffles-1724",
//       tags: ["30 min", "Snack", "Homemade staple", "Budget-friendly"],
//     },
//     {
//       "id": 45,
//       "title": "Vanilla Chai Spiced Latte Mix",
//       "image":
//         "https://cdn.pickuplimes.com/cache/66/58/6658579a0d5bc8fc99f042d95442c39d.jpg",
//       "link": "https://www.pickuplimes.com/recipe/vanilla-chai-spiced-latte-mix-899",
//       tags: ["15 min", "Homemade staple", "5 ingredients"],
//     },
//     {
//         "id": 129,
//         "title": "Gingerbread Oatmeal with Caramelized Pear",
//         "image":
//             "https://cdn.pickuplimes.com/cache/73/42/7342d87de29238a1481dea246166b915.jpg",
//         "link": "https://www.pickuplimes.com/recipe/gingerbread-oatmeal-with-caramelized-pear-731",
//         },
//         {
//         "id": 130,
//         "title": "Homemade Hazelnut Butter",
//         "image":
//             "https://cdn.pickuplimes.com/cache/08/78/0878196bfbcf0d7c7f61a353639fd3f9.jpg",
//         "link": "https://www.pickuplimes.com/recipe/homemade-hazelnut-butter-783",
//         },
//         {
//         "id": 131,
//         "title": "Peppermint Mocha",
//         "image":
//             "https://cdn.pickuplimes.com/cache/bd/e3/bde3f89d254d12b0fdd602fd2c111306.jpg",
//         "link": "https://www.pickuplimes.com/recipe/peppermint-mocha-737",
//         },
//         {
//         "id": 140,
//         "title": "Toasted Coconut & Almond Granola",
//         "image":
//             "https://cdn.pickuplimes.com/cache/64/5f/645fb895ceeefcfd33d5b6c1c0b821f5.jpg",
//         "link": "https://www.pickuplimes.com/recipe/toasted-coconut-almond-granola-123",
//         },
//         {
//         "id": 125,
//         "title": "Blueberry Almond Oatmeal",
//         "image":
//             "https://cdn.pickuplimes.com/cache/a7/88/a7888d1136f399dc20943601f426a599.jpg",
//         "link": "https://www.pickuplimes.com/recipe/blueberry-almond-oatmeal-729",
//         },
        
//   ];

//   const [slideIndex, setSlideIndex] = useState(0);
//   const itemsPerSlide = 8; // 4 per row × 2 rows

//   const slideForward = () => {
//     const maxSlide = Math.floor(recipes.length / itemsPerSlide);
//     if (slideIndex < maxSlide) setSlideIndex(slideIndex + 1);
//   };

//   const slideBackward = () => {
//     if (slideIndex > 0) setSlideIndex(slideIndex - 1);
//   };

//   const start = slideIndex * itemsPerSlide;
//   const end = start + itemsPerSlide;
//   const visibleRecipes = recipes.slice(start, end);

//   return (
//     <section className="px-6 py-10">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-serif">Sweet Delights</h2>
//         <div className="space-x-3">
//           <button
//             onClick={slideBackward}
//             disabled={slideIndex === 0}
//             className="text-lg px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
//           >
//             ◀
//           </button>
//           <button
//             onClick={slideForward}
//             disabled={end >= recipes.length}
//             className="text-lg px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
//           >
//             ▶
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {visibleRecipes.map((recipe) => (
//           <RecipeCard key={recipe.id} {...recipe} />
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';
import { useState } from "react";
import RecipeCard from "./RecipeCard";

export default function FeaturedDes() {
  const recipes =[
    {
      id: 1,
      title: "Double Chocolate Granola",
      image: "https://cdn.pickuplimes.com/cache/19/0e/190e387dd3257d48e4ed9f95d1af48c2.jpg",
      link: "https://www.pickuplimes.com/recipe/double-chocolate-granola-576",
      
    },
    {
      id: 2,
      title: "Pretzel Stuffed Dates",
      image: "https://cdn.pickuplimes.com/cache/4a/9b/4a9b8b40ba17cd0df0956a0937aa41e5.jpg",
      link: "https://www.pickuplimes.com/recipe/pretzel-stuffed-dates-653",
      
    },
    {
      id: 165,
      title: "Peanut Butter Cookie Dough Energy Balls",
      image: "https://cdn.pickuplimes.com/cache/ce/2e/ce2e6c399256d572164c963fa1952fe5.jpg",
      link: "https://www.pickuplimes.com/recipe/peanut-butter-cookie-dough-energy-balls-650",
      
    },
    {
      id: 44,
      title: "Chocolate Peppermint Truffles",
      image: "https://cdn.pickuplimes.com/cache/3e/21/3e21ace314482ba8dcbec523225c075e.jpg",
      link: "https://www.pickuplimes.com/recipe/chocolate-peppermint-truffles-1724",
      
    },
    {
      "id": 140,
      "title": "Toasted Coconut & Almond Granola",
      "image": "https://cdn.pickuplimes.com/cache/64/5f/645fb895ceeefcfd33d5b6c1c0b821f5.jpg",
      "link": "https://www.pickuplimes.com/recipe/toasted-coconut-almond-granola-123",
     
    }, 
    { 
      "id": 108,
      "title": "Vegan Chocolate Fudge",
      "image":
        "https://cdn.pickuplimes.com/cache/ef/f0/eff07880d366d8a04b560bf483bb853e.jpg",
      "link": "https://www.pickuplimes.com/recipe/vegan-chocolate-fudge-723",
    },
    {
      "id": 116,
      "title": "Vegan Chocolate Cake",
      "image":
        "https://cdn.pickuplimes.com/cache/3e/db/3edbe8d2b6690ce42b4bbc5a81f42afc.jpg",
      "link": "https://www.pickuplimes.com/recipe/easy-vegan-chocolate-cake-74",
    },
    {
      "id": 117,
      "title": "Vegan Chocolate Buttercream Frosting",
      "image":
        "https://cdn.pickuplimes.com/cache/e9/a8/e9a8b0102ca2ee0436f2bc67ad0a3a9f.jpg",
      "link": "https://www.pickuplimes.com/recipe/vegan-chocolate-buttercream-frosting-843",
    },
    {
      "id": 130,
      "title": "Homemade Hazelnut Butter",
      "image": "https://cdn.pickuplimes.com/cache/08/78/0878196bfbcf0d7c7f61a353639fd3f9.jpg",
      "link": "https://www.pickuplimes.com/recipe/homemade-hazelnut-butter-783",
      
    },
    {
      id: 45,
      title: "Vanilla Chai Spiced Latte Mix",
      image: "https://cdn.pickuplimes.com/cache/66/58/6658579a0d5bc8fc99f042d95442c39d.jpg",
      link: "https://www.pickuplimes.com/recipe/vanilla-chai-spiced-latte-mix-899",
      
    }, 
    {
      "id": 366,
      "title": "One-Bowl Chewy Double Chocolate Chip Cookies",
      "image":
        "https://cdn.pickuplimes.com/cache/c1/ca/c1ca663067f7d660cb94d33618381159.jpg",
      "link": "https://www.pickuplimes.com/recipe/one-bowl-chewy-double-chocolate-chip-cookies-199",
    },
    {
      "id": 367,
      "title": "Candied Coconut & Cinnamon Pecans",
      "image":
        "https://cdn.pickuplimes.com/cache/8c/b7/8cb70790fd59cbbd9659c30d3c8c4260.jpg",
      "link": "https://www.pickuplimes.com/recipe/candied-coconut-cinnamon-pecans-202",
    },  
    {
      "id": 335,
      "title": "Ultra Fudgy Sea Salt Caramel Brownies",
      "image":
        "https://cdn.pickuplimes.com/cache/0b/01/0b01d7de91d72844d8b8120ee2171af9.jpg",
      "link": "https://www.pickuplimes.com/recipe/ultra-fudgy-sea-salt-caramel-brownies-153",
    },
    {
      "id": 131,
      "title": "Peppermint Mocha",
      "image": "https://cdn.pickuplimes.com/cache/bd/e3/bde3f89d254d12b0fdd602fd2c111306.jpg",
      "link": "https://www.pickuplimes.com/recipe/peppermint-mocha-737",
    },
    {
      "id": 336,
      "title": "Stewed Berries",
      "image":
        "https://cdn.pickuplimes.com/cache/8f/44/8f44a6121b1b601939cfaf96f9218eb3.jpg",
      "link": "https://www.pickuplimes.com/recipe/stewed-berries-91",
    },
    {
      "id": 337,
      "title": "Homemade Almond Butter",
      "image":
        "https://cdn.pickuplimes.com/cache/fc/e5/fce5f67d44de7b3a0f1094a01eca77be.jpg",
      "link": "https://www.pickuplimes.com/recipe/homemade-almond-butter-20",
    },
    {
      "id": 202,
      "title": "Vanilla Caramel Cake",
      "image":
        "https://cdn.pickuplimes.com/cache/56/53/5653ddbbcb4cf81ec800176921bb0229.jpg",
      "link": "https://www.pickuplimes.com/recipe/vanilla-caramel-cake-459",
    },
    {
      "id": 203,
      "title": "Raspberry Rose Chocolate Bark",
      "image":
        "https://cdn.pickuplimes.com/cache/00/92/00922e458139c741c4dcae6b7dcd9265.jpg",
      "link": "https://www.pickuplimes.com/recipe/raspberry-rose-chocolate-bark-404",
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
    <h2 className="text-3xl font-serif mb-6">Choco Goodness</h2>
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