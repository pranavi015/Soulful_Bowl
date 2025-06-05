'use client';
import React, { useEffect, useState } from 'react';

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/c/914e-af0d-4529-bfb9')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Articles</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              {article.subtitle && (
                <p className="text-sm text-gray-600 mb-2">{article.subtitle}</p>
              )}
              <a
                href={article.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}