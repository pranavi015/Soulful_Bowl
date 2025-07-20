// export default function RecipeCard({ title, image, isPremium }) {
//     return (
//       <div className="w-60 rounded-xl overflow-hidden shadow-md">
//         <div className="relative">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-40 object-cover rounded-t-xl"
//           />
//           {isPremium && (
//             <div className="absolute top-2 right-2 bg-white px-2 py-0.5 text-xs rounded-full shadow text-yellow-600 font-semibold">
//               Premium
//             </div>
//           )}
//         </div>
//         <div className="p-2">
//           <h3 className="text-center font-serif text-lg">{title}</h3>
//         </div>
//       </div>
//     );
//   }

// import { Link } from "react-router-dom";

// export default function RecipeCard({ title, description, image, tags = [], link = "" }) {
//   return (
//     <div className="w-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
//       {/* Recipe Image */}
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-44 object-cover rounded-t-xl"
//       />

//       <div className="p-4 space-y-2">
//         {/* Title & Description */}
//         <h3 className="text-xl font-serif">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>

//         {/* View Recipe Link */}
//         {link && (
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block w-full text-center px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-500 transition"
//           >
//             View Recipe
//           </a>
//         )}
        
//         <div className="flex flex-wrap gap-2 mt-2">
//           {tags.map((tag, i) => (
//             <span
//               key={i}
//               className="bg-green-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Link from 'next/link';
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function RecipeCard({
  title,
  description,
  image,
  tags = [],
  link = "",
  onFavourite,
}) {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    if (onFavourite) {
      onFavourite({
        title,
        description,
        image,
        tags,
        link,
        isFavourite: !isFavourite,
      });
    }
  };

  return (
    <div className="w-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between">
      {/* Recipe Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-xl"
      />

      <div className="p-4 flex flex-col flex-grow justify-between">
        {/* Title & Description */}
        <div>
          <h3 className="text-xl font-serif mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-2 mt-auto">
            <Link href="./viewRecipe"><button className="flex-1 px-18 py-3 bg-green-600 text-white text-sm rounded-lg hover:bg-green-500 transition text-center">View Recipe</button></Link>


          <button
            onClick={toggleFavourite}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 text-red-500 rounded-lg shadow hover:scale-105 transition"
          >
            {isFavourite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
}
