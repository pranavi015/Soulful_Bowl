'use client';
import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/c/914e-af0d-4529-bfb9")
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.isArray(value) && value.map((val) => (
        <div
          key={val.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
        >
          <img src={val.image} alt={val.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h1 className="text-xl font-semibold text-gray-800">{val.title}</h1>
            <h2 className="text-md text-gray-600 mb-2">{val.subtitle}</h2>
            <a
              href={val.link}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
