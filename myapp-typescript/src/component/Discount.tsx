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
        localStorage.setItem("discountThreshold", discountThreshold.toString());
        localStorage.setItem("discountPercent", discountPercent.toString());
    }, [discountThreshold, discountPercent]);

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

    const thresholdChange = (event:any) => {
        const newThreshold = Number(event.target.value);
        setDiscountThreshold(newThreshold);
    };

    const percentChange = (event:any) => {
        const newPercent = Number(event.target.value);
        setDiscountPercent(newPercent);
    };

    return (
        <div className='discount-container'>

            <InputComponent label="Kaç TL ve üzeri indirim uygulansın?"
                className="discount-input"
                type="number" 
                value={discountThreshold == 0 ? "" : discountThreshold.toString()} 
                onChange={thresholdChange} 
            />

            <InputComponent label="Yüzde kaç indirim uygulansın?" 
                className="discount-input"
                type="number" 
                value={discountPercent == 0 ? "" : discountPercent.toString()} 
                onChange={percentChange} 
            />
            <Button label="Uygula" onClick={calculateDiscount} className="discount-button" />
        </div>
    )
};

export default Discount;