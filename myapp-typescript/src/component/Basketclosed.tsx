import React from "react";
import Basketc from "./Basketc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../BasketContext";
import { DiscountContext } from "../DiscountContext";
import { Product } from "../ProductsContext";

function Basketclosed() {
    const { basket, sidebar, basketsum } = useContext(BasketContext);
    const displayedItems = basket.slice(0, 2); 
    const {
        discount,
        setDiscount,
        discountThreshold,
        setDiscountThreshold,
        discountPercent,
        setDiscountPercent,
        appliedDiscount,
    } = useContext(DiscountContext);

    return (
        <div className={sidebar === true ? "sidebar-active" : "sidebar-closed"}>
            {displayedItems.map((product: Product) => (
                <Basketc changeCSS={true} product={product} />
            ))}
            <Link to="basketpage" className="seebasket">
                Sepeti gör
            </Link>
            {appliedDiscount > 0 && (
                <p className="sum">Uygulanacak indirim= {appliedDiscount} </p>
            )}
            {discount > 0 && (
                <p className="sum">İndirimli sepet tutarı= {discount} TL</p>
            )
            }
            
            <p className="sum">Sepet tutarı: {basketsum} TL</p>
        </div>
    );
}

export default Basketclosed;
