import React, { useEffect, useState } from "react";
import Productsc from "../component/Productsc";
import { Product, ProductsContext } from "../Context/ProductsContext";
import { useContext } from "react";
import Lottie from "react-lottie-player";
import loadinglottie from "../lotties/loading.json"
import { capitalize } from "../utils/capitalize";
import { sumasString } from "../utils/sumasString";
const Productspage = () => {
  const { products, loading, setLoading } = useContext(ProductsContext)
  const [tempProducts, setTempProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTempProducts(products);
    capitalize("elma armut kel mahmut");
    sumasString("1234","5678")
  }, [products])


  const alphSorted = () => {
    let alphSorted = [...products];
    alphSorted.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    console.log("A-Z", alphSorted);
    setTempProducts(alphSorted);
  }
  const alphSortedReverse = () => {
    let alphSorted = [...products];
    let reverse = alphSorted.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    reverse.reverse();
    console.log("Z-A", reverse);
    setTempProducts(reverse);
  }
  const priceSorted = () => {
    let priceSorted = [...products];
    priceSorted.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    console.log("D-Y", priceSorted);
    setTempProducts(priceSorted);
  }
  const priceSortedReverse = () => {
    let priceSorted = [...products];
    let reverse = priceSorted.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
    reverse.reverse();
    console.log("Y-D", reverse);
    setTempProducts(reverse);
  }
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Filtrele</button>
        <div className="dropdown-content">
          <a onClick={() => {
            setTempProducts(products);
          }} href="#">Varsayılan</a>
          <a onClick={()=> alphSorted() } href="#">A-Z</a>
          <a onClick={() => alphSortedReverse() } href="#">Z-A</a>
          <a onClick={() => priceSorted() } href="#">Düşükten yükseğe</a>
          <a onClick={() => priceSortedReverse() } href="#">Yüksekten düşüğe</a>
        </div>
      </div>
      <div
        className="productscomponent"
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {loading ? <Lottie
          animationData={loadinglottie}
          play
          style={{ width: 510, height: 510 }}
        /> : tempProducts.map((product) => (
          <Productsc product={product} />
        ))}
      </div></>
  );
};

export default Productspage;

//objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0)) stackoverflowdan buldum
//objs.sort((a,b) => a.last_nom - b.last_nom); // b - a for reverse sort
