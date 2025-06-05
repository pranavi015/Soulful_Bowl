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

export default function RecipeCard({ title, description, image, tags = [] }) {
  return (
    <div className="w-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      {/* Recipe Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-xl"
      />

      <div className="p-4 space-y-2">
        {/* Title & Description */}
        <h3 className="text-xl font-serif">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        {/* Tag Pills */}
        <div className="flex flex-wrap gap-2 mt-2">
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
    </div>
  );
}
