import React from 'react'
import Productsc from '../component/Productsc';
import { ProductsContext } from '../ProductsContext';
import { useContext } from 'react';
const Productspage = () => {
    const { products } = useContext(ProductsContext)
    return (
        products.map((product) => (
            < Productsc product={product} />
        ))
    )
}

export default Productspage