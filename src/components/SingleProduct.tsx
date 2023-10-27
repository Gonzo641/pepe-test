"use client";

import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/foodSlice";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = ({ product }: any) => {

    const dispatch = useDispatch();

  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg mt-24">
        <div>
            <Image 
                src={product?.image} 
                alt="product image"
                width={500}
                height={500}
                className="w-full max-h-[700px] object-cover rounded-lg" 
            />
        </div>
        <div className="flex flex-col justify-center gap-y-10">
            <div>
                <p className="text-3xl font-semibold">
                    {product?.title}
                </p>
                <p className="text-xl font-semibold">
                    <FormattedPrice amount={product?.price}/>
                </p>
            </div>
            <p className="text-lightText">
                {product?.description}
            </p>
            <div className="text-sm text-lightText flex flex-col">
            </div>
            <div onClick={() =>
                    dispatch(addToCart(product)) &&
                    toast.success(
                    `${product?.title.substring(0, 15)} added successfully!`)
                }
                 className="flex items-center cursor-pointer group">
                <button className="bg-darkText text-slate-100 px-6 py-3 text-sm
                                   uppercase flex items-center border-r-[1px]
                                   border-r-slate-500">
                    add to cart
                </button>
                <span className="bg-darkText text-xl text-slate-100
                                 w-12 py-3 flex items-center justify-center
                                 group-hover:bg-red-500 duration-200">
                    <IoMdCart />
                </span>
            </div>
        </div>
        <Toaster />
    </div>
  );
};
export default SingleProduct