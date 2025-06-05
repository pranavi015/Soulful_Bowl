'use client';
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export default function LatestArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/c/914e-af0d-4529-bfb9")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-serif mb-6">Latest articles</h2>
      <div className="flex flex-wrap gap-6">
        {articles.map((article, index) => (
          <RecipeCard
            key={index}
            title={article.title}
            image={article.image || "/images/placeholder.jpg"}
            isPremium={article.isPremium || false}
          />
        ))}
      </div>
    </section>
  );
}
