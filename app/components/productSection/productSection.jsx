import ProductCard from "./productCard"

import Image from "next/image";
import { FaCartPlus } from 'react-icons/fa';

export default function ProductSection() {
    const products= [
        {
          id: 1,
          name: 'Electronics',
          image: '/assets/products/product1.png',
          alt : 'books',
          rating: 4.8,
          price : 49,
          description: 'Explore the latest gadgets and electronics.',
        },
        {
          id: 2,
          name: 'Clothing',
          image: '/assets/products/product2.png',
          alt : 'books',
          rating: 4.8,
          price : 49,
          description: 'Discover trendy fashion and clothing.',
        },
        {
          id: 3,
          name: 'Books',
          image: '/assets/products/product3.png',
          alt : 'books',
          rating: 4.8,
          price : 49,
          description: 'Find your next favorite book.',
        },
        {
            id: 4,
            name: 'Books',
            image: '/assets/products/product4.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 5,
            name: 'Books',
            image: '/assets/products/product5.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 6,
            name: 'Books',
            rating: 4.8,
            price : 49,
            image: '/assets/products/product6.png',
            description: 'Find your next favorite book.',
          },
          {
            id: 7,
            name: 'Books',
            image: '/assets/products/product7.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 8,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 8,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 8,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 9,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 10,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 11,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 12,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 13,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 14,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 15,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
          {
            id: 16,
            name: 'Books',
            image: '/assets/products/product8.png',
            alt : 'books',
            rating: 4.8,
            price : 49,
            description: 'Find your next favorite book.',
          },
    
    ]
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                     <div className="relative h-35 hover:cdscale-105 transition-all rounded-t-lg">
                       <Image
                         src={product.image}
                         alt={product.name}
                         layout="fill"
                         objectFit="cover"
                       />
                       <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
                          <FaCartPlus className="text-blue-600 text-lg" />
                       </button>
                     </div>
                     <div className="p-4">
                       <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                       <p className="text-gray-600 mb-4 truncate">{product.description}</p>
                       <div className="flex items-center justify-between">
                         <span className="text-xl font-bold">${product.price}</span>
                         <div className="flex items-center">
                           <span className="text-yellow-500 mr-1">★</span>
                           <span>{product.rating}</span>
                         </div>
                       </div>
                     </div>
            </div>
       ))};
                
          </div>
        </div>
      </section>
    );
  }