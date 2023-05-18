import React, { Children, useContext } from 'react'; //?
import { useState, useEffect, createContext} from 'react';
import { EventContext } from './EventContext';

export const BasketContext = createContext();

const Basketprovider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [basket, setBasket] = useState([]);
    const [basketsum, setBasketsum] = useState(0);
    const data = {
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
                bsum += Number(price.count * price.currentPrice);
            } else {
                bsum += Number(price.currentPrice);
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
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default Basketprovider