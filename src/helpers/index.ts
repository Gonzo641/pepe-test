import { productData, trendingProducts, ProductsCategories,} from "@/constants/data";
import  { Burger } from "@/constants/burger";
import  { Pizza } from "@/constants/pizza";
import  { Salade } from "@/constants/salade";
import  { Entree } from "@/constants/entree";
import  { Dessert } from "@/constants/dessert";
import  { Boisson } from "@/constants/boisson";



export const getProducts = async () => {

  return productData;
};

export const getProductCategory = async () => {

  return ProductsCategories;
};

export const getTrendingProducts = async () => {

  return trendingProducts;
};

export const getBurger = async () => {

  return Burger;
};

export const getPizza = async () => {

  return Pizza;
};

export const getSalade = async () => {

  return Salade;
};

export const getEntree = async () => {

  return Entree;
};

export const getDessert = async () => {

  return Dessert;
};

export const getBoisson = async () => {

  return Boisson;
};

export const calculatePercentage = (oldPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
};

export const getSingleProduct = (_id: number) => {
  const item = productData.find((product) => product._id === _id);
  return item;
};

export const getSingleBurger = (_id: number) => {
  const item = Burger.find((product) => product._id === _id);
  return item;
};

export const getSinglePizza = (_id: number) => {
  const item = Pizza.find((product) => product._id === _id);
  return item;
};

export const getSingleSalade = (_id: number) => {
  const item = Salade.find((product) => product._id === _id);
  return item;
};

export const getSingleEntree = (_id: number) => {
  const item = Entree.find((product) => product._id === _id);
  return item;
};

export const getSingleDessert = (_id: number) => {
  const item = Dessert.find((product) => product._id === _id);
  return item;
};

export const getSingleBoisson = (_id: number) => {
  const item = Boisson.find((product) => product._id === _id);
  return item;
};






// ------------------------------------------ Si API START ---------------------------------

// export const getProducts = async () => {
//   const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
//   if (!res.ok) {
//     throw new Error("Faild to fetch products");
//   }
//   return res.json();
// };
// export const getTrendingProducts = async () => {
//   const res = await fetch(
//     "https://fakestoreapiserver.reactbd.com/smarttrending"
//   );
//   if (!res.ok) {
//     throw new Error("Faild to fetch products");
//   }
//   return res.json();
// };

// ------------------------------------------ Si API END ---------------------------------




  // ---------------------------------------test---------------------------------


  // export function removeItem<T>([...arr]: T[], item: T) {
  //   const index = arr.indexOf(item);
  //   index > -1 && arr.splice(index, 1);
  //   return arr;
  // }
  
  // export function closestItem<T>(arr: T[], item: T) {
  //   const index = arr.indexOf(item);
  //   if (index === -1) {
  //     return arr[0];
  //   } else if (index === arr.length - 1) {
  //     return arr[arr.length - 2];
  //   } else {
  //     return arr[index + 1];
  //   }
  // }
  