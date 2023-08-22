import React, { Children, useContext } from 'react'; //?
import { useState, useEffect, createContext} from 'react';
import { EventContext } from './EventContext';
import { Product } from './ProductsContext';
import axios from 'axios';


export type BasketContextType = {
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
        let date = new Date();
        console.log(date);
        getBasket();
    }, [basket])

    const getBasket= async() => {
        const apiUrl = 'https://fakestoreapi.com/carts/7';
        const response = await axios.patch(apiUrl, {
            id: 3 ,
            date:2019-12-10,
            products:[{productId:1,quantity:3}]
        })
        if (response.status==200){
            console.log("sepetim",basket)
        }
    }
    
    return (
        <BasketContext.Provider value={basketdata}>
            {children}
        </BasketContext.Provider>
    )
}

export default Basketprovider