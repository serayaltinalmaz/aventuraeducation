import React from 'react'
import Productsc from '../component/Productsc';

const Favproductspage = (props) => {
    let favProducts = props.products.filter((product) => product.fav === true);
    return (
        favProducts.map((product) => (
            < Productsc setProducts={props.setProducts} products={props.products} product={product} basket={props.basket} setBasket={props.setBasket} />
        ))
    )
}

export default Favproductspage