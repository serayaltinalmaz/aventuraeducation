import React, { createContext, useState } from "react";
import { BasketContext } from "./BasketContext";
import { useContext, useEffect } from "react";

type DiscountContextType = {
    discount : number;
    setDiscount :(value: number) => void;
    discountThreshold : number;
    setDiscountThreshold : (value: number) => void;
    discountPercent : number;
    setDiscountPercent : (value: number) => void;
    appliedDiscount : number;
    setAppliedDiscount : (value: number) => void;
};

export const DiscountContext = createContext<DiscountContextType>({} as DiscountContextType);

export const DiscountProvider = ({ children }:any) => {
    const { basketsum } = useContext(BasketContext);
    const [discount, setDiscount] = useState(basketsum);
    const [discountThreshold, setDiscountThreshold] = useState<number>(0);
    const [discountPercent, setDiscountPercent] = useState<number>(0);
    const [appliedDiscount, setAppliedDiscount] = useState<number>(0);

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
