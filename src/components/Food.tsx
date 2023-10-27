"use client";

import React, { useState } from 'react';
import { data } from '@/data/data';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/foodSlice";
import toast, { Toaster } from "react-hot-toast";
import { useSectionInView } from "../../lib/hooks";
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { IoMdCart } from "react-icons/io";
import { BiFoodMenu } from 'react-icons/bi'
import { LuCupSoda, LuDessert, LuSalad } from 'react-icons/lu'
import { PiBowlFoodBold } from 'react-icons/pi';
import FormattedPrice from './FormattedPrice';
// import FoodBtn from './Food-btn';

const Food = () => {

  const { ref } = useSectionInView('Recettes', 0.5);

  const [foods, setFoods] = useState(data);

  const [selectedCategory, setSelectedCategory] = useState('');

  const [animationKey, setAnimationKey] = useState(0);

  const dispatch = useDispatch();



  const filterType = (category: string) => {
    if (selectedCategory === category) {
      setFoods(data);
      setSelectedCategory(''); 
    } else {
      setFoods(data.filter((item) => item.category === category));
      setSelectedCategory(category);
    }
    setAnimationKey(animationKey + 1);
  };

  //   Filter by price
  // const filterPrice = (price: string | number) => {
  //   setFoods(
  //     data.filter((item) => {
  //       return item.price === price;
  //     })
  //   );
  // };

  const animation = {
    initial:{ 
        opacity: 0, 
        scale: 0.5 },
    animate:{ 
        opacity: 1, 
        scale: 1 },
};


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};


  return (
    <div  
          ref={ref}
          id='recettes'
          className='max-w-[1640px] m-auto px-4 py-12 scroll-mt-36'>

      <motion.h1 
          className='text-white font-bold text-4xl text-center mb-8'
          variants={animation}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          viewport={{
            once: true,
          }}>
        Nos recettes
      </motion.h1>
      <p className='font-bold text-center sm:text-left text-3xl text-gray-200 mb-8'>
        Choisissez la catégorie 
      </p>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-center'>
        {/* Fliter Type */}
        <div>

          <div className='flex justify-center flex-wrap mb-8'>
            {/* <button
              onClick={() => setFoods(data)}
              className="group flex items-center justify-center btnFood mr-4"
            >
              All
              <BiFoodMenu className="btnIcon group-hover:translate-x-1 group-hover:scale-125"/>
            </button> */}

            <button
              onClick={() => filterType('burger')}
              className={`group flex items-center justify-center btnFood ${selectedCategory === 'burger' ? 'selected' : ''}`}
            >
              Burgers
              <FaHamburger className="btnIcon group-hover:translate-x-1 group-hover:scale-125"/>
            </button>

            <button
              onClick={() => filterType('pizza')}
              className={`group flex items-center justify-center btnFood ${selectedCategory === 'pizza' ? 'selected' : ''}`}
            >
              Pizza
              <FaPizzaSlice className="btnIcon group-hover:translate-x-1 group-hover:scale-125"/>
            </button>
            <button
              onClick={() => filterType('salade')}
              className={`group flex items-center justify-center btnFood ${selectedCategory === 'salade' ? 'selected' : ''}`}
            >
              Salades
              <LuSalad className="btnIcon group-hover:translate-x-1 group-hover:scale-125"/>
            </button>
            <button
              onClick={() => filterType('entree')}
              className={`group flex items-center justify-center btnFood ${selectedCategory === 'entree' ? 'selected' : ''}`}
            >
              Entrées
              <PiBowlFoodBold className="btnIcon group-hover:translate-x-1 group-hover:scale-125"/>
            </button>
            <button
              onClick={() => filterType('dessert')}
              className={`group flex items-center justify-center btnFood ${selectedCategory === 'dessert' ? 'selected' : ''}`}
            >
              Desserts
              <LuDessert className="btnIcon group-hover:translate-x-1 group-hover:scale-125"/>
            </button>
            <button
              onClick={() => filterType('boisson')}
              className={`group flex items-center justify-center btnFood ${selectedCategory === 'boisson' ? 'selected' : ''}`}
            >
              Boissons
              <LuCupSoda className="btnIcon group-hover:translate-x-1 group-hover:scale-125"/>
            </button>
          </div>
        </div>

        {/* Filter Price */}
        {/* <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div> */}
      </div>

      {/* Display foods */}

      <div  
      className='grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 '>
        {foods.map((item, index) => (
          <div key={item._id} className='hover:scale-105 duration-300'>
          <motion.div
            key={animationKey}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true,
              }}
            custom={index}
            className='border shadow-lg rounded-lg'
          >
            <Image
              width={500}
              height={500}
              src={item.image}
              alt={item.title}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-lg text-white'>
                {item.title}
              </p>
              <p>
                <span className='bg-black text-white p-2 rounded-full'>
                <FormattedPrice amount={item?.price} />
                </span>
              </p>
            </div>
            <div onClick={() =>
                    dispatch(addToCart(item)) &&
                    toast.success(
                    `${item?.title.substring(0, 15)} added successfully!`)
                }
                 className="flex items-center justify-end cursor-pointer">
                <button className="bg-black text-slate-100 px-6 py-3 text-sm
                                   uppercase flex items-center gap-2 border-r-[1px]
                                   border-r-slate-500 rounded-full mb-2 mr-2
                                   hover:bg-red-600 duration-200">
                    Ajouter au panier
                    <IoMdCart className="text-xl"/>
                </button>
                {/* <span className="bg-darkText text-xl text-slate-100 rounded-full
                                 w-12 py-3 flex items-center justify-center
                                 group-hover:bg-red-500 duration-200">
                    <IoMdCart />
                </span> */}
            </div>
          </motion.div>
          </div>
        ))}
      </div>
      <Toaster />                              
    </div>
  );
};

export default Food;





// import { getProductCategory } from "@/helpers";
// import React from "react";
// import Container from "./Container";
// import ProductsCategories from "./ProductsData";
// import { Category } from "../../type";


// const Products = async () => {

//   const products = await getProductCategory();
//   return (
//     <section>
//       <h2 className="flex justify-center text-white text-2xl mb-12 font-semibold">
//         Nos Recettes
//       </h2>
//       <Container 
//             className="grid grid-cols-1 md:grid-cols-2 
//             xl:grid-cols-4 gap-4 -m-10">
//         {products?.map((item: Category) =>
//           <ProductsCategories item={item} key={item._id} />
//         )}
//       </Container>
//     </section>
//   )
// }
// export default Products;