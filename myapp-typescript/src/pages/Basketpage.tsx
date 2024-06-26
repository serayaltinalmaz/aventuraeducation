import React from 'react'
import Basketc from '../component/Basketc'
import { useContext } from 'react';
import { BasketContext } from '../Context/BasketContext';
import { Outlet } from 'react-router-dom';
import { Product } from '../Context/ProductsContext';

const Basketpage = () => {
    const { basket } = useContext(BasketContext);
    return (
        <>
        {basket.map((product: Product) => (
            <div className='try'><Basketc changeCSS={false} product={product} /> </div>
        ))}
        <Outlet /> </>
    )
}

export default Basketpage