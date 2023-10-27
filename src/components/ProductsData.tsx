"use client";

import Image from "next/image";
import { ItemProps, Category, BurgerProps } from "../../type";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/foodSlice";
import toast, { Toaster } from "react-hot-toast";
import { useSectionInView } from "../../lib/hooks";
import React from "react";
import { motion } from "framer-motion";

const ProductsCategories = ({ item }: BurgerProps) => {

    const { ref } = useSectionInView('Recettes', 0.5);

    const [isHovered, setIsHovered] = React.useState(false);
    const [showInitialText, setShowInitialText] = React.useState(true);

    const dispatch = useDispatch();

    const productLink = `/${currentCategory}/${item._id}`;

    const animation = {
        initial:{ 
            opacity: 0, 
            scale: 0.5 },
        animate:{ 
            opacity: 1, 
            scale: 1 },
    }

  return (
    <div ref={ref} 
         id="recettes" 
         className="w-full rounded-lg scroll-mt-48">
        <motion.div
                variants={animation}
                initial="initial"
                whileInView="animate"
                transition={{          
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                viewport={{
                    once: true,
                  }}
        >
            <Link href={{ pathname: "/Burger", query: {_id: item?._id}}}> 
                <div className="w-full h-96 group overflow-hidden relative flex justify-center items-center"
                     onMouseEnter={() => {
                        setIsHovered(true);
                        setShowInitialText(false);
                    }}
                     onMouseLeave={() => {
                        setIsHovered(false);
                        setShowInitialText(true);
                    }}
                >
                        <div
                            className={`absolute w-full h-full  ${
                                isHovered ? 'brightness-50' : ''
                            }`}
                        >
                            <Image
                                width={500}
                                height={500}
                                src={item?.image}
                                alt="image du produit"
                                className="w-full h-full object-cover group-hover:scale-110 brightness-75 duration-200 rounded-lg"
                            />
                        </div>
                        {showInitialText && (
                            <p
                                className={`absolute text-4xl text-white rotate-45  ${
                                    !isHovered ? 'visible' : 'hidden'
                                }`}
                            >
                                {item?.title}
                            </p>
                        )}
                        <p
                            className={`absolute text-4xl text-white rotate-45 ${
                                isHovered ? 'visible' : 'hidden'
                            }`}
                        >
                            Voir la carte
                        </p>
                        <div className="absolute w-60 h-[5px] bg-black rotate-45 mt-12 ml-10" />
                    {/* <p className="absolute text-4xl text-white rotate-45 hover:text-red-600">Burger</p>
                    <div className="absolute w-60 h-[5px] bg-black rotate-45 mt-12 ml-10" />
                    <Image
                        src={item?.image}
                        alt="product image"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover
                                group-hover:scale-110 duration-200 rounded-lg " 
                    /> */}
                    {/* {item?.isNew && (
                        <span className="absolute top-2 right-2 font-medium text-xs
                                        py-1 px-3 rounded-full bg-white
                                        group-hover:bg-red-600 duration-200
                                        group-hover:text-white">
                            New arrival
                        </span>
                    )} */}
                </div>
            </Link>
            <div className="border-[1px] border-slate-300
                            border-t-0 px-2 py-4 flex flex-col
                            gap-y-2 bg-white rounded-b-lg">
                <p>{item?.title}</p>
                <div className="flex items-center justify-between">
                    <div className="border-[1px] border-red-600
                                    py-1 px-4 rounded-full text-xs">
                        <p>{calculatePercentage(item?.price, item?.oldPrice)}
                            % off
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <p className="text-slate-500 line-through text-sm">
                            <FormattedPrice amount={item?.oldPrice} />
                        </p>
                        <p className="font-semibold">
                            <FormattedPrice amount={item?.price} />
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={() => dispatch(addToCart(item)) &&
                                    toast.success(
                                        `${item?.title.substring(0, 15)}
                                        added successfully!`
                                    )} 
                            className="bg-red-600 px-4 py-2 text-sm
                                        tracking-wide rounded-full text-slate-100
                                        hover:bg-red-800 hover:text-white duration-200">
                        add to cart
                    </button>
                    <div className="flex items-center gap-x-1">
                        {startArray}
                    </div>
                </div>
            </div>
        </motion.div>
        <Toaster />
    </div>
  )
}
export default ProductsCategories;



