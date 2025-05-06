export default function SearchRecipes() {
  return (
    <div className="relative w-full h-[85vh]">
      {/* Background image */}
      <img
        src="/hero-recipes.png" // Make sure this is in /public
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text and Search */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-semibold mb-6">Recipes</h1>
        <div className="w-[80%] md:w-[50%] flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Search recipes"
            className="flex-grow px-3 py-2 outline-none text-gray-700 rounded-l-full"
          />
          <button className="text-green-600 hover:text-green-800">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
}
