import React from 'react'
import Productsc from '../component/Productsc';
import { ProductsContext } from '../ProductsContext';
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
const Productspage = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className="productscomponent" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {products.map((product) => (
                < Productsc product={product} />
            ))}
        </div>
    )
}

export default Productspage

