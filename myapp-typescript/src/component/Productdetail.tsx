import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { BasketContext } from "../Context/BasketContext";
import { Product, ProductsContext } from "../Context/ProductsContext";
import { EventContext } from "../Context/EventContext";
import Lottie from "react-lottie-player";
import likeanimation from "../lotties/likeanimation.json";
import { BsFillBasketFill } from "react-icons/bs";

const Productdetail = () => {
  const { sidebar, setSidebar, basket, setBasket, basketsum, setBasketsum } =
    useContext(BasketContext);
  const { products, setProducts } = useContext(ProductsContext);
  const { sumcount, setSumcount, likebar, setLikebar } =
    useContext(EventContext);
  //const { id } = useParams();
  const { id } = useParams<{ id: string }>();
  const selectedProduct = products.find((product) => product.id === Number(id)) as Product;
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
      <img src={selectedProduct.image} className="detpageimg" />
      <div
        className="heart"
        onClick={() => {
          let tempProducts = [...products];
          tempProducts.map((product) => {
            if (product.id == Number(id)) {
              if (product.fav === true) {
                selectedProduct.fav = false;
              } else {
                selectedProduct.fav = true;
              }
            }
          });
          setProducts(tempProducts);
        }}
      >
        <div className="lotdetpage">
          <Lottie
            loop={false}
            segments={likesegment as any}
            animationData={likeanimation}
            play
            style={{ width: 80, height: 80 }}
          />{" "}
        </div>
      </div>
      <div className="detpagedet">
        <p className="detpagename">{selectedProduct.title}</p>
        <p className="detpagedesc">{selectedProduct.description}</p>
        <p className="detpageprice">{selectedProduct.price} TL</p>
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