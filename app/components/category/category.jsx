"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const categories = [
  { id: 1, image :'/assets/category1.png' ,name:"Electronic", href: '#' },
  { id: 2, image: '/assets/category2.png', href: '#' },
  { id: 3, image: '/assets/category3.png', href: '#' },
  { id: 4, image: '/assets/category4.png', href: '#' },
  { id: 5, image: '/assets/category5.png', href: '#' },
  { id: 6, image: '/assets/category6.png', href: '#' },
  { id: 7, image: '/assets/category7.png', href: '#' },
  { id: 8, image: '/assets/category7.png', href: '#' },
  { id: 9, image: '/assets/category7.png', href: '#' },
  { id: 10, image: '/assets/category7.png', href: '#' },
  { id: 11, image: '/assets/category7.png', href: '#' },
];


const Categories = () => {
  
  return (
    <div className="relative overflow-hidden p-5">
      <h1>Top Categories</h1>
      {/* Scrollable Container */}
      <div className='flex scroll-auto '>
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.href}
            className="flex-shrink-0 px-6 py-2  text-gray-700 rounded-full hover:translate-2.5 transition-colors"
          >
            <Image className='' src={category.image} width={100} height={100}/>
            
          </a>
        ))}
      </div>
      </div>
  );
};

export default Categories;