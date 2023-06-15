import React from 'react'
import { useContext } from 'react';
import { DiscountContext } from '../DiscountContext';
import { BasketContext } from '../BasketContext';
import Button from "./Button"
const Discount = () => {
    const { basketsum } = useContext(BasketContext);
    const { discount,
        setDiscount,
        discountThreshold,
        setDiscountThreshold,
        discountPercent,
        setDiscountPercent,
        appliedDiscount
    } = useContext(DiscountContext)

    const calculateDiscount = () => {
        setDiscount(basketsum - appliedDiscount);
    };

    const thresholdChange = (event) => {
        const newThreshold = Number(event.target.value);
        setDiscountThreshold(newThreshold);
    };

    const percentChange = (event) => {
        const newPercent = Number(event.target.value);
        setDiscountPercent(newPercent);
    };

    return (
        <div className='discount-container'>
            <p>Kaç TL ve üzeri indirim uygulansın?</p>
            <input type="number" value={discountThreshold} onChange={thresholdChange} />
            <p>Yüzde kaç indirim uygulansın?</p>
            <input type="number" value={discountPercent} onChange={percentChange} />
            <Button label="Uygula" onClick={calculateDiscount} className="discount-button" />
        </div>
    )
};

export default Discount;