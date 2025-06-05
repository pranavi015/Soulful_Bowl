import RecipeCard from "./RecipeCard";

export default function LatestRecipes() {
  const recipes = [
    {
        "id": 44,
        "title": "Chocolate Peppermint Truffles",
        "image":
          "https://cdn.pickuplimes.com/cache/3e/21/3e21ace314482ba8dcbec523225c075e.jpg",
        "link": "https://www.pickuplimes.com/recipe/chocolate-peppermint-truffles-1724",
      },
      {
        "id": 45,
        "title": "Vanilla Chai Spiced Latte Mix",
        "image":
          "https://cdn.pickuplimes.com/cache/66/58/6658579a0d5bc8fc99f042d95442c39d.jpg",
        "link": "https://www.pickuplimes.com/recipe/vanilla-chai-spiced-latte-mix-899",
      },
      {
        "id": 46,
        "title": "Vegan French Toast",
        "image":
          "https://cdn.pickuplimes.com/cache/f7/f6/f7f61dbaebe6c336b470b5d45afa5497.jpg",
        "link": "https://www.pickuplimes.com/recipe/vegan-french-toast-433",
      },
      {
        "id": 47,
        "title": "Peanut & Chili Oil Cucumber Salad",
        "image":
          "https://cdn.pickuplimes.com/cache/73/b5/73b52fc8879d0b461f43585242b88bd3.jpg",
        "link": "https://www.pickuplimes.com/recipe/peanut-chili-oil-cucumber-salad-1572",
      },
      {
        "id": 48,
        "title": "The Best Vegan Chow Mein",
        "image":
          "https://cdn.pickuplimes.com/cache/31/e2/31e2e08ad0c33578c285cec4daf39f6f.jpg",
        "link": "https://www.pickuplimes.com/recipe/the-best-vegan-chow-mein-800",
      },
      {
        "id": 175,
        "title": "Baked Tortilla Chips",
        "image":
          "https://cdn.pickuplimes.com/cache/88/4f/884ffbf3de8c5673a9d33c9b22dfb3d0.jpg",
        "link": "https://www.pickuplimes.com/recipe/baked-tortilla-chips-590",
      },
      {
        "id": 176,
        "title": "Chipotle Refried Beans",
        "image":
          "https://cdn.pickuplimes.com/cache/08/a4/08a4e6c1afd7292fed4f8ee91c200ec5.jpg",
        "link": "https://www.pickuplimes.com/recipe/chipotle-refried-beans-582",
      },
      {
        "id": 177,
        "title": "Homemade Simple Salsa",
        "image":"https://cdn.pickuplimes.com/cache/5f/f3/5ff32d9f055900f87671f4068d119c78.jpg",
        "link": "https://www.pickuplimes.com/recipe/homemade-simple-salsa-412",
      },
      {
        "id": 178,
        "title": "Make-Ahead Freezer Burritos",
        "image":"https://cdn.pickuplimes.com/cache/ef/c5/efc548b8e94cf40a6e35fd320448db50.jpg",
        "link": "https://www.pickuplimes.com/recipe/make-ahead-freezer-burritos-330",
      },
  ];

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-serif mb-6">Latest recipes</h2>
      <div className="flex flex-wrap gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </section>
  );
}
