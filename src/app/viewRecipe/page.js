'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const instructions = [
  {
    title: "Salted Caramel Strawberry Smoothie Bowl",
    image: "https://i.ibb.co/3NBRdS2/strawberry-bowl.jpg",
    badges: ["Vegan", "Gluten-Free", "No Refined Sugar"],
    ingredients: [
      "1 cup frozen strawberries",
      "1 frozen banana",
      "1/2 cup almond milk",
      "1 tbsp almond butter",
      "1 tsp maple syrup",
      "Pinch of sea salt",
      "Toppings: sliced strawberries, granola, coconut flakes"
    ],
    directions: [
      "Blend frozen strawberries, banana, almond milk, almond butter, maple syrup, and sea salt until thick and smooth.",
      "Pour into a bowl and smooth the top.",
      "Add toppings: sliced strawberries, granola, and coconut flakes.",
      "Serve immediately."
    ],
    link: "https://www.feastingonfruit.com/salted-caramel-strawberry-smoothie-bowl/"
  },
  // Add more recipes here if needed
];

export default function Page() {
  const searchParams = useSearchParams();
  const recipeTitle = searchParams.get('title');
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (recipeTitle) {
      const decodedTitle = decodeURIComponent(recipeTitle);
      const matched = instructions.find(
        (item) => item.title.toLowerCase() === decodedTitle.toLowerCase()
      );
      setRecipe(matched);
    }
  }, [recipeTitle]);

  if (!recipe) return <p className="text-center py-10">Recipe not found.</p>;

  return (
    <div className="min-h-screen bg-[#d2d8ca] py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white/80 p-6 rounded-xl shadow-lg">
        <div className="bg-[#216705] text-white text-center py-3 rounded-lg mb-4">
          <h1 className="text-2xl font-bold">{recipe.title}</h1>
        </div>

        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-auto rounded-xl mb-6 shadow"
        />

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#216705] mb-2">Badges</h2>
          <ul className="flex flex-wrap gap-2">
            {recipe.badges.map((badge, index) => (
              <li
                key={index}
                className="bg-[#d2d8ca] text-[#216705] border border-[#216705] px-3 py-1 rounded-full text-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#216705] mb-2">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-800">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#216705] mb-2">Directions</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-800">
            {recipe.directions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

      </div>
    </div>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// const instructions = [
//   {
//     title: "Salted Caramel Strawberry Smoothie Bowl",
//     image: "https://i.ibb.co/3NBRdS2/strawberry-bowl.jpg",
//     badges: ["Vegan", "Gluten-Free", "No Refined Sugar"],
//     ingredients: [
//       "1 cup frozen strawberries",
//       "1 frozen banana",
//       "1/2 cup almond milk",
//       "1 tbsp almond butter",
//       "1 tsp maple syrup",
//       "Pinch of sea salt",
//       "Toppings: sliced strawberries, granola, coconut flakes"
//     ],
//     directions: [
//       "Blend frozen strawberries, banana, almond milk, almond butter, maple syrup, and sea salt until thick and smooth.",
//       "Pour into a bowl and smooth the top.",
//       "Add toppings: sliced strawberries, granola, and coconut flakes.",
//       "Serve immediately."
//     ],
//     link: "https://www.feastingonfruit.com/salted-caramel-strawberry-smoothie-bowl/"
//   },
//   // Add more...
// ];

// export default function Page() {
//     const searchParams = useSearchParams();
//     const recipeTitle = searchParams.get('title');
//     const imageParam = searchParams.get('image');
//     const [recipe, setRecipe] = useState(null);
  
//     useEffect(() => {
//       if (recipeTitle) {
//         const decodedTitle = decodeURIComponent(recipeTitle);
//         const decodedImage = imageParam ? decodeURIComponent(imageParam) : null;
  
//         const matched = instructions.find(
//           (item) => item.title.toLowerCase() === decodedTitle.toLowerCase()
//         );
  
//         if (matched) {
//           setRecipe({
//             ...matched,
//             image: decodedImage || matched.image, // override if passed
//           });
//         }
//       }
//     }, [recipeTitle, imageParam]);
  
//     if (!recipe) return <p className="text-center p-10">Recipe not found.</p>;
  
//     return (
//       <div className="bg-[#d2d8ca] min-h-screen p-6 max-w-3xl mx-auto rounded-xl shadow-md">
//         <h1 className="text-3xl font-bold mb-4 text-[#216705]">{recipe.title}</h1>
  
//         {recipe.image && (
//           <img
//             src={recipe.image}
//             alt={recipe.title}
//             className="w-full mb-4 rounded-xl"
//           />
//         )}
  
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-2 text-[#216705]">Badges</h2>
//           <ul className="flex gap-2 flex-wrap">
//             {recipe.badges.map((badge, index) => (
//               <li key={index} className="bg-white text-[#216705] px-3 py-1 rounded-full text-sm shadow-sm">{badge}</li>
//             ))}
//           </ul>
//         </div>
  
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-2 text-[#216705]">Ingredients</h2>
//           <ul className="list-disc pl-5 space-y-1 text-gray-800">
//             {recipe.ingredients.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
  
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-2 text-[#216705]">Directions</h2>
//           <ol className="list-decimal pl-5 space-y-2 text-gray-800">
//             {recipe.directions.map((step, index) => (
//               <li key={index}>{step}</li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     );
//   }