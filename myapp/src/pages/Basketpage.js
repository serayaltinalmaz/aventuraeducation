import React from 'react'
import Basketc from '../component/Basketc'
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';

const Basketpage = () => {
    const { basket } = useContext(BasketContext);
    return (
        basket.map((product) => (
            <Basketc isUnderline={false} product={product} />
        ))
    )
}

export default Basketpage