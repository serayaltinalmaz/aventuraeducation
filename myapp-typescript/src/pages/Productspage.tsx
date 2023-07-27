import React, { useEffect, useState } from "react";
import Productsc from "../component/Productsc";
import { ProductsContext } from "../ProductsContext";
import { useContext } from "react";
import axios from "axios";
const Productspage = () => {
  const { products } = useContext(ProductsContext)
  //const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const apiUrl = 'https://fakestoreapi.com/products';
  //   axios.get(apiUrl)
  //     .then(response => { console.log(response)
  //       setProducts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Hata:', error);
  //     });
  // }, []);
  // console.log(products)
  return (
    <div
      className="productscomponent"
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {products.map((product) => (
        <Productsc product={product} />
      ))}
    </div>
  );
};

export default Productspage;
