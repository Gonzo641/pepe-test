
// -------------------------- Data pour page principal --------------------------------------

export const ProductsCategories = [
  {
    _id: 1,
    title: "Nouveautées",
    image:
      "https://images.pexels.com/photos/2714722/pexels-photo-2714722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 2,
    title: "Offres",
    image:
      "https://images.pexels.com/photos/3944307/pexels-photo-3944307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 3,
    title: "Burger",
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 4,
    title: "Pizza",
    image:
      "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 5,
    title: "Salade",
    image:
      "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 6,
    title: "Entrées",
    image:
      "https://images.pexels.com/photos/17751636/pexels-photo-17751636/free-photo-of-repas-viande-fast-food-frais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 7,
    title: "Desserts",
    image:
      "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: 8,
    title: "Boissons",
    image:
      "https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// -------------------------- Data pour page de category --------------------------------------

export const productData = [
    {
      _id: 1,
      title: "Nos nouveautées",
      isNew: true,
      description:
        "Venez découvrir nos nouveautées à durée limitée !",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // quantity: 1,
    },
    {
      _id: 2,
      title: "Nos promotions",
      isNew: false,
      description:
        "Profitez de nos promotions tout l'année !",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // quantity: 1,
    },
    {
      _id: 3,
      title: "Nos Burger",
      isNew: false,
      description:
        "",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // quantity: 1,
    },
    {
      _id: 4,
      title: "Nos Pizzas",
      isNew: false,
      description:
        "",
      image:
        "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // quantity: 1,
    },
    {
      _id: 5,
      title: "Nos Salade",
      isNew: false,
      description:
        "",
      image:
        "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // quantity: 1,
    },
    {
      _id: 6,
      title: "Nos Entrées",
      isNew: false,
      description:
        "",
      image:
        "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // quantity: 1,
    },
    {
      _id: 7,
      title: "Nos Desserts",
      isNew: false,
      description:
        "",
      image:
        "https://img.freepik.com/free-photo/curly-woman-elegant-hat-looking-camera-studio-shot-fascinating-blonde-girl-striped-shirt_197531-13243.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=ais",
      // quantity: 1,
    },
    {
      _id: 8,
      title: "Nos Boissons",
      isNew: false,
      description:
        "",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      // quantity: 1,
    },
  ];


  // -------------------------- Data pour produits suggestion --------------------------------------

  export const trendingProducts = [
    {
      _id: 1,
      title: "Papy Burger",
      isNew: true,
      // oldPrice: "200",
      price: 12.9,
      description:
        "Le classique avec sa sauce faite maison !",
      category: "burger",
      image:
        "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // rating: 4,
      quantity: 1,
    },
    {
      _id: 2,
      title: "Forestière",
      isNew: true,
      // oldPrice: "70",
      price: 11.9,
      description:
        "La classique cuite au feu de bois",
      category: "pizza",
      image:
        "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // rating: 3,
      quantity: 1,
    },
    {
      _id: 3,
      title: "Salade",
      isNew: true,
      // oldPrice: "70",
      price: 3.5,
      description:
        "Accompagne parfaitement votre pizza !",
      category: "women",
      image:
        "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 1,
    },
    {
      _id: 4,
      title: "Cheesecake",
      isNew: true,
      // oldPrice: "70",
      price: 4.9,
      description:
        "Cheesecake aux fruits rouges",
      category: "dessert",
      image:
        "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // rating: 3,
      quantity: 1,
    },
  ];


  // -------------------------- Data pour produits seuls --------------------------------------

  // export const Burger = [

  //       //------------------------------- Burger
  //   {
  //     _id: 9,
  //     title: "Papy Burger",
  //     isNew: true,
  //     price: 12.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 10,
  //     title: "Mamy Burger",
  //     isNew: false,
  //     price: 10.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 11,
  //     title: "Cabra Burger",
  //     isNew: true,
  //     price: 11.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 12,
  //     title: "Madrague Burger",
  //     isNew: true,
  //     price: 12.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 13,
  //     title: "Marinella Burger",
  //     isNew: true,
  //     price: 14.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 14,
  //     title: "Biggie Burger",
  //     isNew: true,
  //     price: 15.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  // ];

  // export const Pizza = [
  //   //------------------------------- Pizza 
  //   {
  //     _id: 15,
  //     title: "Pizza1",
  //     isNew: true,
  //     price: 12.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 16,
  //     title: "Pizza2",
  //     isNew: false,
  //     price: 11.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 17,
  //     title: "Pizza3",
  //     isNew: false,
  //     price: 10.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 18,
  //     title: "Pizza4",
  //     isNew: false,
  //     price: 12.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 19,
  //     title: "Pizza5",
  //     isNew: false,
  //     price: 9.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 20,
  //     title: "Pizza6",
  //     isNew: false,
  //     price: 14.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  // ];

  //   export const Salade = [

  //   //------------------------------- Salades 
  //   {
  //     _id: 21,
  //     title: "Salade1",
  //     isNew: true,
  //     price: 10.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 22,
  //     title: "Salade2",
  //     isNew: false,
  //     price: 10.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 23,
  //     title: "Salade3",
  //     isNew: false,
  //     price: 10.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 24,
  //     title: "Salade4",
  //     isNew: false,
  //     price: 8.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 25,
  //     title: "Salade5",
  //     isNew: false,
  //     price: 11.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 26,
  //     title: "Salade6",
  //     isNew: false,
  //     price: 10.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  // ];

  // export const Entree = [

  //   //------------------------------- Entrées 
  //   {
  //     _id: 27,
  //     title: "Entrées1",
  //     isNew: true,
  //     price: 6.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/17751636/pexels-photo-17751636/free-photo-of-repas-viande-fast-food-frais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 28,
  //     title: "Entrées2",
  //     isNew: false,
  //     price: 6.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/17751636/pexels-photo-17751636/free-photo-of-repas-viande-fast-food-frais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 29,
  //     title: "Entrées3",
  //     isNew: false,
  //     price: 6.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/17751636/pexels-photo-17751636/free-photo-of-repas-viande-fast-food-frais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 30,
  //     title: "Entrées4",
  //     isNew: false,
  //     price: 6.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/17751636/pexels-photo-17751636/free-photo-of-repas-viande-fast-food-frais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 31,
  //     title: "Entrées5",
  //     isNew: false,
  //     price: 5.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/17751636/pexels-photo-17751636/free-photo-of-repas-viande-fast-food-frais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 32,
  //     title: "Entrées6",
  //     isNew: false,
  //     price: 5.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/17751636/pexels-photo-17751636/free-photo-of-repas-viande-fast-food-frais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  // ];

  // export const Dessert = [

  //   //------------------------------- Desserts 
  //   {
  //     _id: 33,
  //     title: "Dessert1",
  //     isNew: true,
  //     price: 5.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 34,
  //     title: "Dessert2",
  //     isNew: false,
  //     price: 4.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 35,
  //     title: "Dessert3",
  //     isNew: false,
  //     price: 4.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 36,
  //     title: "Dessert4",
  //     isNew: false,
  //     price: 5.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 37,
  //     title: "Dessert5",
  //     isNew: false,
  //     price: 4.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 38,
  //     title: "Dessert6",
  //     isNew: false,
  //     price: 4.9,
  //     description:
  //       "Le classique avec sa sauce faite maison !",
  //     image:
  //       "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  // ];

  // export const Boisson = [

  //   //------------------------------- Boissons
  //   {
  //     _id: 39,
  //     title: "Boisson1",
  //     isNew: false,
  //     price: 2.5,
  //     image:
  //       "https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 40,
  //     title: "Boisson2",
  //     isNew: false,
  //     price: 2.5,
  //     image:
  //       "https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 41,
  //     title: "Boisson3",
  //     isNew: false,
  //     price: 2.5,
  //     image:
  //       "https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 42,
  //     title: "Boisson4",
  //     isNew: false,
  //     price: 3.5,
  //     image:
  //       "https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 43,
  //     title: "Boisson5",
  //     isNew: false,
  //     price: 2.5,
  //     image:
  //       "https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  //   {
  //     _id: 44,
  //     title: "Boisson6",
  //     isNew: false,
  //     price: 3.5,
  //     image:
  //       "https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     quantity: 1,
  //   },
  // ];














    // ---------------------------------------model---------------------------------
  // {
  //   _id: 1,
  //   title: "Nos nouveautées",
  //   isNew: true,
  //   // price: 12.9,
  //   description:
  //     "Le classique avec sa sauce faite maison !",
  //   category: "burger",
  //   image:
  //     "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   quantity: 1,
  // },

  // ---------------------------------------test---------------------------------


  // export interface Ingredient {
  //   icon: string;
  //   label: string;
  // }
  
  // export const allIngredients = [
  //   { icon: "🍅", label: "Tomato" },
  //   { icon: "🥬", label: "Lettuce" },
  //   { icon: "🧀", label: "Cheese" },
  //   { icon: "🥕", label: "Carrot" },
  //   { icon: "🍌", label: "Banana" },
  //   { icon: "🫐", label: "Blueberries" },
  //   { icon: "🥂", label: "Champers?" }
  // ];
  
  // const [tomato, lettuce, cheese] = allIngredients;
  // export const initialTabs = [tomato, lettuce, cheese];
  
  // export function getNextIngredient(
  //   ingredients: Ingredient[]
  // ): Ingredient | undefined {
  //   const existing = new Set(ingredients);
  //   return allIngredients.find((ingredient) => !existing.has(ingredient));
  // }