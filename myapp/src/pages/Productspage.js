import React from 'react'
import Productsc from '../component/Productsc';
const Productspage = (props) => {
    return (
        props.products.map((product) => (
            < Productsc setProducts={props.setProducts} products={props.products} product={product} basket={props.basket} setBasket={props.setBasket} />
        ))
    )
}

export default Productspage