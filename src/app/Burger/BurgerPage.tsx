import React from 'react';
import { getBurger, getSingleBurger } from "@/helpers";
import { Burger } from "../../../type";
import SingleProduct from '@/components/SingleProduct';


const BurgersPage = async () => {

    const burger = await getBurger();

  return (
    <div>
      <h1>Menu des Burgers</h1>
      {burger?.map((item: Burger) => (
        <SingleProduct item={item} key={item._id}  />
      ))}
    </div>
  );
};

export default BurgersPage;