import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useContext } from 'react';
import { BasketContext } from '../BasketContext';
function Basketc(props) {
    const { basket, setBasket } = useContext(BasketContext);
    return (
        <div className={`basketcomponent ${props.isUnderline === true && "basketcompenentborder"
            } `}>
            <div className='basketdetail'>
                <img src={props.product.productPic}></img>
                <p>{props.product.productName}</p>
                <p>{props.product.currentPrice} TL</p>
            </div>
            <div className='count1'>
                <div className='count2'>
                    <button className='addbutton' onClick={() => {
                        let tempBasket = [...basket];
                        props.product.count++;
                        setBasket(tempBasket);
                    }}>+</button>
                    <p className='count3'>{props.product.count} Adet</p>
                    <button className='delbutton' onClick={() => {
                        let tempBasket = [...basket];
                        props.product.count--;
                        if (props.product.count === 0) {
                            tempBasket = tempBasket.filter(item => item.id !== props.product.id);
                        }
                        setBasket(tempBasket);
                    }}>-</button>
                </div>
                <div className='bin' onClick={() => {
                    let tempBasket = [...basket];
                    tempBasket = tempBasket.filter(item => item.id !== props.product.id); //eşleşmeyeni listeye atıyor eşleşeni siliyor eşleşen seçilen idli ürün çıktı yeni listede yok filtrelendi
                    setBasket(tempBasket);
                }}><RiDeleteBin5Line /></div>
            </div>
        </div>


    )
}

export default Basketc