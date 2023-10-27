import React from 'react';
import { categories } from '@/data/data';
import { ItemProps } from '../../type';
import Image from 'next/image';

const CategoryComponent = ({ item }: ItemProps) => {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Meilleurs articles du menu
      </h1>
      {/* Catégories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'
          >
            <h2 className='font-bold sm:text-xl'>{category.title}</h2>
            <Image src={category.image} alt={category.title} className='w-20' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;