import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { EventContext } from '../EventContext';
import { ProductsContext } from '../ProductsContext';

type Product = {
    id: number;
    productPic: string;
    productName: string;
    currentPrice: number;
    count: number;
    fav: boolean;
};

function Like() {
    const { likebar } = useContext(EventContext);
    const { products } = useContext(ProductsContext);
    let favProducts = products.filter((product : Product) => product.fav === true);
    const displayedItems = favProducts.slice(0, 3); // İlk üç ürünü alacak şekilde listeyi sınırla
    return (
        <div className={likebar === true ? "likebasket-active" : "likebasket-closed"} >
            {displayedItems.map((product : Product) => (
                <div className='favproduct'>
                    <img src={product.productPic}></img>
                    <p>{product.productName}</p>
                    <p>{product.currentPrice} TL</p>
                </div>
            ))}
            <Link to="favproductspage"> Favorileri gör</Link>
        </div>

    )
}

export default Like
