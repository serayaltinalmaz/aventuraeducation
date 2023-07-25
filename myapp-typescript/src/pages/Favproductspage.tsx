import React from 'react'
import Productsc from '../component/Productsc';
import { useContext } from 'react';
import { ProductsContext } from '../ProductsContext';
import { Product } from '../component/Basketc';
const Favproductspage = () => {
    const { products } = useContext(ProductsContext)
    let favProducts = products.filter((product:Product) => product.fav === true);
    return (
        favProducts.map((product:Product) => (
            < Productsc product={product} />
        ))
    )
}

export default Favproductspage