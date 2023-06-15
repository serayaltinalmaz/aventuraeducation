import React, { createContext, useState } from "react";
import { BasketContext } from "./BasketContext";
import { useContext, useEffect } from 'react';

export const DiscountContext = createContext();

export const DiscountProvider = ({ children }) => {
    const {basketsum} = useContext(BasketContext);
    const [discount, setDiscount] = useState(basketsum);
    const [discountThreshold, setDiscountThreshold] = useState();
    const [discountPercent, setDiscountPercent] = useState();
    let appliedDiscount = (basketsum * discountPercent) / 100;
    const discountData = {
        discount,
        setDiscount,
        discountThreshold,
        setDiscountThreshold,
        discountPercent,
        setDiscountPercent,
        appliedDiscount
    };
    useEffect(() => {
        if (basketsum >= discountThreshold) {
            setDiscount(basketsum - appliedDiscount);
        }
        else{
            setDiscount(basketsum);
        }
    }, [basketsum]);

    return (
        <div>
            <DiscountContext.Provider value={discountData} >
                {children}
            </DiscountContext.Provider>
        </div>
    )
}

export default DiscountProvider