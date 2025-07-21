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
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-xl"
      />

      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-serif mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{description}</p>

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

        <div className="flex items-center justify-between gap-2 mt-auto">
          <Link
            href={{
              pathname: "/viewRecipe",
              query: {
                title: encodeURIComponent(title),
                image: encodeURIComponent(image), 
              },
            }}
          >
            <button className="flex-1 px-18 py-3 bg-green-600 text-white text-sm rounded-lg hover:bg-green-500 transition text-center">
              View Recipe
            </button>
          </Link>



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
