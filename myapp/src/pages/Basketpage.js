import React from 'react'
import Basketc from '../component/Basketc'
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
import { Outlet } from 'react-router-dom';

const Basketpage = () => {
    const { basket } = useContext(BasketContext);
    return (
        <>
        {basket.map((product) => (
            <div className='try'><Basketc changeCSS={false} product={product} /> </div>
        ))}
        <Outlet /> </>
    )
}

export default Basketpage