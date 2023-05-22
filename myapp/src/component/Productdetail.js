import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
import { ProductsContext } from '../ProductsContext';
import { EventContext } from '../EventContext';
const Productdetail = () => {
    const { sidebar,
        setSidebar,
        basket,
        setBasket,
        basketsum,
        setBasketsum } = useContext(BasketContext);
    const { products, setProducts } = useContext(ProductsContext);
    const { sumcount, setSumcount, likebar, setLikebar } = useContext(EventContext);
    const { id } = useParams();
    const selectedProduct = products.find((product) => product.id == id);
    return (
        <div className='detpage'>
            <img src={selectedProduct.productPic} className='detpageimg' />
            <div className='detpagedet'>
                <p className='detpagename'>{selectedProduct.productName}</p>
                <p className='detpagedesc'>{selectedProduct.productDesc}</p>
                <p className='detpageprice'>{selectedProduct.currentPrice} TL</p>
            </div>
        </div>
    )
}

export default Productdetail