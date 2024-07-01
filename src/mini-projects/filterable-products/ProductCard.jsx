// src/ProductCard.jsx
import React from 'react';
import { Card } from 'flowbite-react';
import { Star } from 'lucide-react'; // Example icon import

function ProductCard({ product }) {
  return (
    <Card
      className="max-w-sm"
      imgAlt={`Image of ${product.title}`}
      imgSrc={product.images[0]} 
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${index < product.rating ? 'text-yellow-300' : 'text-gray-300'}`}
            fill="currentColor"
          />
        ))}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {product.rating}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
      <div className="mt-2 flex justify-between">
        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discountPercentage}%
        </span>
        <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.category}
        </span>
      </div>
    </Card>
  );
}

export default ProductCard;
