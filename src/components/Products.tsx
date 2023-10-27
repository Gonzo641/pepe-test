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