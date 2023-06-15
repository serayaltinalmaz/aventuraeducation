import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { BasketContext } from "../BasketContext";
import { ProductsContext } from "../ProductsContext";
import { EventContext } from "../EventContext";
import Lottie from "react-lottie-player";
import likeanimation from "../lotties/likeanimation.json";
import { BsFillBasketFill } from "react-icons/bs";
const Productdetail = () => {
  const { sidebar, setSidebar, basket, setBasket, basketsum, setBasketsum } =
    useContext(BasketContext);
  const { products, setProducts } = useContext(ProductsContext);
  const { sumcount, setSumcount, likebar, setLikebar } =
    useContext(EventContext);
  const { id } = useParams();
  const selectedProduct = products.find((product) => product.id == id);
  const [likesegment, setLikesegment] = useState([0, 115]);
  useEffect(() => {
    if (selectedProduct.fav) {
      setLikesegment([0, 115]);
    } else {
      setLikesegment([116, 181]);
    }
  }, [selectedProduct.fav]);
  return (
    <div className="detpage">
      <img src={selectedProduct.productPic} className="detpageimg" />
      <div
        className="heart"
        onClick={() => {
          let tempProducts = [...products];
          tempProducts.map((elma) => {
            if (elma.id == id) {
              if (elma.fav === true) {
                selectedProduct.fav = false;
              } else {
                selectedProduct.fav = true;
              }
            }
          });
          console.log(tempProducts);
          setProducts(tempProducts);
        }}
      >
        <div className="lotdetpage">
          <Lottie
            loop={false}
            segments={likesegment}
            animationData={likeanimation}
            play
            style={{ width: 80, height: 80 }}
          />{" "}
        </div>
      </div>
      <div className="detpagedet">
        <p className="detpagename">{selectedProduct.productName}</p>
        <p className="detpagedesc">{selectedProduct.productDesc}</p>
        <p className="detpageprice">{selectedProduct.currentPrice} TL</p>
        <button
          className="addtobasketdetpage"
          onClick={() => {
            let tempBasket = [...basket];
            let items = tempBasket.find(
              (item) => item.id === selectedProduct.id
            );
            if (items === undefined) {
              tempBasket.push(selectedProduct);
              tempBasket[tempBasket.length - 1].count = 1;
              setBasket(tempBasket);
            } else {
              tempBasket.forEach((basketproduct) => {
                if (selectedProduct.id === basketproduct.id) {
                  basketproduct.count++;
                  setBasket(tempBasket);
                }
              });
            }
          }}
        >
          Sepete Ekle <BsFillBasketFill />
        </button>
      </div>
    </div>
  );
};

export default Productdetail;
