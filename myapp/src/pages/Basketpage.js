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
            <Basketc isUnderline={false} product={product} />
        ))}
        <Outlet /> </>
    )
}

export default Basketpage