import React, { createContext, useState } from "react";
import { BasketContext } from "./BasketContext";
import { useContext, useEffect } from "react";

export const DiscountContext = createContext();

export const DiscountProvider = ({ children }) => {
    const { basketsum } = useContext(BasketContext);
    const [discount, setDiscount] = useState(basketsum);
    const [discountThreshold, setDiscountThreshold] = useState();
    const [discountPercent, setDiscountPercent] = useState();
    const [appliedDiscount, setAppliedDiscount] = useState(0);

    const discountData = {
        discount,
        setDiscount,
        discountThreshold,
        setDiscountThreshold,
        discountPercent,
        setDiscountPercent,
        appliedDiscount,
        setAppliedDiscount
    };
    useEffect(() => {
        if (basketsum >= discountThreshold) {
            let tempAppliedDiscount = (basketsum * discountPercent) / 100;
            setDiscount(basketsum - tempAppliedDiscount);
            setAppliedDiscount(tempAppliedDiscount);
        } else {
            setAppliedDiscount(0);
            setDiscount(0);
        }
    }, [basketsum]);

    return (
        <div>
            <DiscountContext.Provider value={discountData}>
                {children}
            </DiscountContext.Provider>
        </div>
    );
};

export default DiscountProvider;
