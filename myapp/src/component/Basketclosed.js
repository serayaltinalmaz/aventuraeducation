import React from 'react'
import Basketc from './Basketc';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
function Basketclosed() {
    const { basket, sidebar, basketsum } = useContext(BasketContext);
    const displayedItems = basket.slice(0, 2); // İlk iki ürünü alacak şekilde listeyi sınırla
    return (
        <div className={sidebar === true ? "sidebar-active" : "sidebar-closed"}>
            {displayedItems.map((product) => (
                <Basketc isUnderline={true} product={product} />
            ))}
            <Link to="basketpage"> Sepeti gör </Link>
            <p className='sum'>Sepet tutarı: {basketsum} TL</p>
        </div>
    )
}

export default Basketclosed