import React, { useEffect, useState } from "react";
import Productsc from "../component/Productsc";
import { Product, ProductsContext } from "../ProductsContext";
import { useContext } from "react";
import Lottie from "react-lottie-player";
import loadinglottie from "../lotties/loading.json"
const Productspage = () => {
  const { products, loading, setLoading } = useContext(ProductsContext)
  const [tempProducts, setTempProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTempProducts(products)
  }, [products])

  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">Filtrele</button>
        <div className="dropdown-content">
          <a onClick={() => {
            setTempProducts(products);
          }} href="#">Varsayılan</a>
          <a onClick={() => {
            let alphSorted = [...products];
            //objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0)) stackoverflowdan buldum
            //objs.sort((a,b) => a.last_nom - b.last_nom); // b - a for reverse sort
            alphSorted.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            console.log("A-Z", alphSorted);
            setTempProducts(alphSorted);
          }} href="#">A-Z</a>
          <a onClick={() => {
            let alphSorted = [...products];
            let reverse = alphSorted.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            reverse.reverse();
            console.log("Z-A", reverse);
            setTempProducts(reverse);
          }} href="#">Z-A</a>
          <a onClick={() => {
            let priceSorted = [...products];
            priceSorted.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            console.log("D-Y", priceSorted);
            setTempProducts(priceSorted);
          }} href="#">Düşükten yükseğe</a>
          <a onClick={() => {
            let priceSorted = [...products];
            let reverse = priceSorted.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            reverse.reverse();
            console.log("Y-D", reverse);
            setTempProducts(reverse);
          }} href="#">Yüksekten düşüğe</a>
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
