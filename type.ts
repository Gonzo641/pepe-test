export interface Products {
    _id: number;
    title: string;
    isNew: boolean;
    // oldPrice: number;
    price: number;
    description: string;
    category: string;
    image: string;
    // rating: number;
    quantity: number;
    }

export interface CategoryType {
  _id: number;
  title: string;
  image: string;
}

export interface ItemProps {
    item: CategoryType;
}

export interface StateProps {
    food: {
      productData: [];
      userInfo: {};
      orderData: {
        order: Products[];
      };
    };
  }

















  // export interface Burger {
//   _id: number;
//   title: string;
//   isNew: boolean;
//   price: number;
//   description: string;
//   image: string;
//   quantity: number;
// }

// export interface BurgerProps {
//     item: Burger;
// }


// export interface Pizza {
//   _id: number;
//   title: string;
//   isNew: boolean;
//   price: number;
//   description: string;
//   image: string;
//   quantity: number;
// }

// export interface PizzaProps {
//     item: Pizza;
// }

// export interface Salade {
//   _id: number;
//   title: string;
//   isNew: boolean;
//   price: number;
//   description: string;
//   image: string;
//   quantity: number;
// }

// export interface SaladeProps {
//     item: Salade;
// }

// export interface Entree {
//   _id: number;
//   title: string;
//   isNew: boolean;
//   price: number;
//   description: string;
//   image: string;
//   quantity: number;
// }

// export interface EntreeProps {
//     item: Entree;
// }

// export interface Dessert {
//   _id: number;
//   title: string;
//   isNew: boolean;
//   price: number;
//   description: string;
//   image: string;
//   quantity: number;
// }

// export interface DessertProps {
//     item: Dessert;
// }

// export interface Boisson {
//   _id: number;
//   title: string;
//   isNew: boolean;
//   price: number;
//   image: string;
//   quantity: number;
// }

// export interface BoissonProps {
//     item: Boisson;
// }
