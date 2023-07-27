import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { EventContext } from '../EventContext';
import { ProductsContext } from '../ProductsContext';

function Like() {
    const { likebar } = useContext(EventContext);
    const { products } = useContext(ProductsContext);
    let favProducts = products.filter((product) => product.fav === true);
    const displayedItems = favProducts.slice(0, 3); // İlk üç ürünü alacak şekilde listeyi sınırla
    return (
        <div className={likebar === true ? "likebasket-active" : "likebasket-closed"} >
            {displayedItems.map((product) => (
                <div className='favproduct'>
                    <img src={product.image}></img>
                    <p>{product.title}</p>
                    <p>{product.price} TL</p>
                </div>
            ))}
            <Link to="favproductspage"> Favorileri gör</Link>
        </div>

    )
}

export default Like
