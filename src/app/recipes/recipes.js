// export default function Recipes() {
//     return (
//       <div className="relative w-full h-[400px]">
//         {/* Background Image */}
//         <img
//           src="/images/recipes-bg.jpg" // Replace with your image path
//           alt="Recipes"
//           className="w-full h-full object-cover"
//         />
  
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
//           <h1 className="text-white text-5xl font-semibold mb-6">Recipes</h1>
          
//           {/* Search bar */}
//           <div className="bg-white rounded-full shadow-md flex items-center px-4 py-2 w-[300px] md:w-[400px]">
//             <input
//               type="text"
//               placeholder="Search recipes"
//               className="flex-grow outline-none text-gray-700 placeholder-gray-500"
//             />
//             <svg
//               className="w-5 h-5 text-gray-500"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 101.5 9a7.5 7.5 0 0015 0z" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     );
//   }
  

export default function RecipesPage() {
  return (
    <div>
      <searchRecipes/>
    </div>
  );
}
