import React from 'react'
import Basketc from './Basketc';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
import { DiscountContext } from '../DiscountContext';
function Basketclosed() {
    const { basket, sidebar, basketsum } = useContext(BasketContext);
    const displayedItems = basket.slice(0, 2); // İlk iki ürünü alacak şekilde listeyi sınırla
    const { discount,
        setDiscount,
        discountThreshold,
        setDiscountThreshold,
        discountPercent,
        setDiscountPercent,
        appliedDiscount
    } = useContext(DiscountContext)

    return (
        <div className={sidebar === true ? "sidebar-active" : "sidebar-closed"}>
            {displayedItems.map((product) => (
                <Basketc changeCSS={true} product={product} />
            ))}
                <Link to="basketpage" className='seebasket'> Sepeti gör </Link>
                <p className='sum'>Uygulanacak indirim= {appliedDiscount || 0} </p>
                <p className='sum'>İndirimli sepet tutarı: {discountPercent ? discount : 0} TL</p> 
                <p className='sum'>Sepet tutarı: {basketsum} TL</p>
        </div>
    )
}

export default Basketclosed