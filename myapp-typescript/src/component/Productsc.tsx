import React, { useEffect, useRef, useState } from 'react'
import { BsFillBasketFill } from 'react-icons/bs';
import Lottie from 'react-lottie-player'
import likeanimation from '../lotties/likeanimation.json'
import { useContext } from 'react';
import { BasketContext } from '../Context/BasketContext';
import { Product, ProductsContext } from '../Context/ProductsContext';
import { Link, useNavigate } from 'react-router-dom';
import Button from "./Button"

type ProductscProps = {
    product: Product;
};

function Productsc(props: ProductscProps) {
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
    const navigate = useNavigate()
    const Detail = () => {
        navigate(`/productdetail/${props.product.id}`);
        };
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
                    segments={likesegment as any}
                    animationData={likeanimation}
                    play
                    style={{ width: 50, height: 50 }} /> </div></div>
                <img src={props.product.image} onClick={Detail} />
                <div className='details'>
                    <h1>{props.product.title}</h1>
                    <p className='desc'>{props.product.description}</p>
                    <p className='price'>{props.product.price} TL</p>
                    <Button className="addtobasket" label="Sepete Ekle " icon={<BsFillBasketFill/>} iconPosition="left" onClick={() => {
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
                    }}  />
                </div>
        </div>
    )
}

export default Productsc