import React, { useEffect, useState } from "react";
import Productsc from "../component/Productsc";
import { ProductsContext } from "../ProductsContext";
import { useContext } from "react";
const Productspage = () => {
  const { products, setProducts } = useContext(ProductsContext)

  return (
    <>
    <div className="dropdown">
        <button className="dropbtn">Filtrele</button>
          <div className="dropdown-content">
            <a onClick={()=>{
                  let alphSorted = [...products]; 
                  //objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0)) stackoverflowdan buldum
                  //objs.sort((a,b) => a.last_nom - b.last_nom); // b - a for reverse sort
                  alphSorted.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
                  console.log("A-Z",alphSorted);
                  setProducts(alphSorted);
            } } href="#">A-Z</a>
            <a onClick={()=>{
                  let alphSorted = [...products]; 
                  let reverse = alphSorted.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
                  reverse.reverse();
                  console.log("Z-A",reverse);
                  setProducts(reverse);
            } } href="#">Z-A</a>
            <a onClick={()=>{
                  let priceSorted = [...products]; 
                  priceSorted.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
                  console.log("D-Y",priceSorted);
                  setProducts(priceSorted);
            } } href="#">Düşükten yükseğe</a>
            <a onClick={()=>{
                  let priceSorted = [...products]; 
                  let reverse = priceSorted.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
                  reverse.reverse();
                  console.log("Y-D",reverse);
                  setProducts(reverse);
            } } href="#">Yüksekten düşüğe</a>
          </div>
      </div>
    <div
      className="productscomponent"
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap"}}
    >
      {products.map((product) => (
        <Productsc product={product} />
      ))}
    </div></>
  );
};

export default Productspage;
