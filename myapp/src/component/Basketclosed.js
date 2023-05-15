import React from 'react'
import Basketc from './Basketc';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
function Basketclosed(props) {
    const displayedItems = props.basket.slice(0, 2); // İlk iki ürünü alacak şekilde listeyi sınırla
    return (
        <div className={props.sidebar === true ? "sidebar-active" : "sidebar-closed"}>
            {displayedItems.map((product) => (
                <Basketc isUnderline={true} product={product} basket={props.basket} setBasket={props.setBasket} />
            ))}
            <Link to="basketpage"> Sepeti gör </Link>
            <p className='sum'>Sepet tutarı: {props.basketsum} TL</p>
        </div>
    )
}

export default Basketclosed