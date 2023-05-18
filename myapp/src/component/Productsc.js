import React, { useEffect, useRef, useState } from 'react'
import { BsFillBasketFill } from 'react-icons/bs';
import Lottie from 'react-lottie-player'
import likeanimation from '../lotties/likeanimation.json'
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
import { ProductsContext } from '../ProductsContext';
function Productsc(props) {
    const { basket, setBasket } = useContext(BasketContext);
    const { products, setProducts } = useContext(ProductsContext)
    const [likesegment, setLikesegment] = useState([0, 115]);
    useEffect(() => {
        if (props.product.fav) {
            setLikesegment([0, 115]);
        } else {
            setLikesegment([116, 181]);
        }
    }, [props.product.fav]);

    return (
        <div className='compenent'>
            <div className='heart' onClick={() => {
                let tempProducts = [...products];
                tempProducts.map((elma) => {
                    if (elma.id === props.product.id) {
                        if (elma.fav === true) {
                            props.product.fav = false
                        } else {
                            props.product.fav = true;
                        }
                    }
                }
                )
                console.log(tempProducts)
                setProducts(tempProducts);
            }}>
                <div className='lot'><Lottie
                    loop={false}
                    segments={likesegment}
                    animationData={likeanimation}
                    play
                    style={{ width: 50, height: 50 }} /> </div></div>
            <img src={props.product.productPic}></img>
            <div className='details'>
                <h1>{props.product.productName}</h1>
                <p className='desc'>{props.product.productDesc}</p>
                <p className='price'>{props.product.currentPrice} TL</p>
                <button className='addtobasket' onClick={() => {
                    let tempBasket = [...basket];
                    let items = tempBasket.find(item => item.id === props.product.id);
                    if (items === undefined) {
                        tempBasket.push(props.product);
                        tempBasket[tempBasket.length - 1].count = 1;
                        setBasket(tempBasket);
                    } else {
                        tempBasket.forEach(basketproduct => {
                            if (props.product.id === basketproduct.id) {
                                basketproduct.count++;
                                setBasket(tempBasket)
                            }
                        })
                    }
                }} >Sepete Ekle <BsFillBasketFill /></button>
            </div>
        </div>
    )
}

export default Productsc