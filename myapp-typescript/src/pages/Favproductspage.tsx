import React from "react";
import Productsc from "../component/Productsc";
import { useContext } from "react";
import { Product, ProductsContext } from "../ProductsContext";

const Favproductspage = () => {
  const { products } = useContext(ProductsContext);
  let favProducts = products.filter((product: Product) => product.fav === true);
  return (
    <>
      {favProducts.map((product) => (
        <Productsc key={product.id} product={product} />
      ))}
    </>
  );
};

export default Favproductspage;

