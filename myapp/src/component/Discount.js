import React, { useLayoutEffect } from 'react'
import { useContext, useEffect } from 'react';
import { DiscountContext } from '../DiscountContext';
import { BasketContext } from '../BasketContext';
import Button from "./Button"
import InputComponent from './InputComponent';
const Discount = () => {
    const { basketsum } = useContext(BasketContext);
    const { discount,
        setDiscount,
        discountThreshold,
        setDiscountThreshold,
        discountPercent,
        setDiscountPercent,
        appliedDiscount,
        setAppliedDiscount
    } = useContext(DiscountContext)

    useEffect(() => {
        const savedThreshold = localStorage.getItem('discountThreshold');
        const savedPercent = localStorage.getItem('discountPercent');
        if (savedThreshold) {//veri varsa set et
            setDiscountThreshold(Number(savedThreshold)); //number çünkü değeri string olarak tutuyo
        }
        if (savedPercent) {
            setDiscountPercent(Number(savedPercent));
        }
    }, []);// sayfa yüklendiğinde local storagedan verileri getitem ile al

    useEffect(() => {
        localStorage.setItem('discountThreshold', discountThreshold);
        localStorage.setItem('discountPercent', discountPercent);
    }, [discountThreshold, discountPercent]);// değerler değiştiğinde local storage a setitem ile kaydet

    const calculateDiscount = () => {
        if (basketsum >= discountThreshold) {
            let tempAppliedDiscount = (basketsum * discountPercent) / 100;
            setDiscount(basketsum - tempAppliedDiscount);
            setAppliedDiscount(tempAppliedDiscount);
        } else{
            setAppliedDiscount(0);
            setDiscount(0);
        }
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

            <InputComponent label="Kaç TL ve üzeri indirim uygulansın?"
            className="discount-input"
                type="number" 
                value={discountThreshold} 
                onChange={thresholdChange} 
            />

            <InputComponent label="Yüzde kaç indirim uygulansın?" 
            className="discount-input"
                type="number" 
                value={discountPercent} 
                onChange={percentChange} 
            />
            <Button label="Uygula" onClick={calculateDiscount} className="discount-button" />
        </div>
    )
};

export default Discount;