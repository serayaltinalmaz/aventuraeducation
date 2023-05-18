import React from 'react'
import Productsc from '../component/Productsc';
import { useContext } from 'react';
import { ProductsContext } from '../ProductsContext';
const Favproductspage = () => {
    const { products } = useContext(ProductsContext)
    let favProducts = products.filter((product) => product.fav === true);
    return (
        favProducts.map((product) => (
            < Productsc product={product} />
        ))
    )
}

export default Favproductspage