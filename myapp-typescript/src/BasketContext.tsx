import React, { Children, useContext } from 'react'; //?
import { useState, useEffect, createContext} from 'react';
import { EventContext } from './EventContext';
import { Product } from './ProductsContext';

type BasketContextType = {
    sidebar: boolean;
    setSidebar: (value: boolean) => void;
    basket: Product[];
    setBasket: (data: Product[]) => void;
    basketsum: number;
    setBasketsum: (value: number) => void;
};

export const BasketContext = createContext<BasketContextType>({} as BasketContextType);

const Basketprovider = ({ children }:any) => {
    const [sidebar, setSidebar] = useState<boolean>(false);
    const [basket, setBasket] = useState<Product[]>([]);
    const [basketsum, setBasketsum] = useState<number>(0);

    const basketdata = {
        sidebar,
        setSidebar,
        basket,
        setBasket,
        basketsum,
        setBasketsum,
    };
    const {setSumcount}= useContext(EventContext);
    useEffect(() => {
        let bsum = 0;
        basket.forEach(price => {
            if (price.count > 1) {
                bsum += Number(price.count * price.price);
            } else {
                bsum += Number(price.price);
            }
        })
        setBasketsum(bsum);
        let countsum = 0;
        basket.forEach(product => {
            let counter = countsum += product.count
            setSumcount(counter)
        })
        if (countsum === 0) {
            setSumcount(0)
        }
    }, [basket])
    return (
        <BasketContext.Provider value={basketdata}>
            {children}
        </BasketContext.Provider>
    )
}

export default Basketprovider