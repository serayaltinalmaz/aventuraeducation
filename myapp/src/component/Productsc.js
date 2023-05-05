import React from 'react'
import { BsFillBasketFill } from 'react-icons/bs';
function Productsc(props) {
    return (
    <div className='compenent'>
        <img src={props.product.productPic}></img>
        <div className='details'>
            <h1>{props.product.productName}</h1>
            <p className='desc'>{props.product.productDesc}</p>
            <p className='price'>{props.product.currentPrice} TL</p>
            <button className='addtobasket' onClick={() => {
            let tempBasket = [...props.basket];
            let items = tempBasket.find(item => item.id === props.product.id);
            if (items === undefined) {
                tempBasket.push(props.product);
                tempBasket[tempBasket.length - 1].count = 1;
                props.setBasket(tempBasket);
            } else {
                tempBasket.forEach(basketproduct => {
                if (props.product.id === basketproduct.id) {
                    basketproduct.count++;
                    props.setBasket(tempBasket)
                }
                })
            }
            }} >Sepete Ekle <BsFillBasketFill /></button>
        </div>
        </div>
    )
}

export default Productsc