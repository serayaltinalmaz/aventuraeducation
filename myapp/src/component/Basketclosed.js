import React from 'react'
import Basketc from './Basketc';
function Basketclosed(props) {
    return (
        <div className={props.sidebar === true ? "sidebar-active" : "sidebar-closed"}>
        {props.basket.map((product) => (
            <Basketc product={product} basket={props.basket} setBasket={props.setBasket} />
        ))}
        <p className='sum'>Sepet tutarı: {props.basketsum} TL</p>
        </div>
    )
}

export default Basketclosed