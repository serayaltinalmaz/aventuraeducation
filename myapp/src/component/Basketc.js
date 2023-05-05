import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri';
function Basketc(props) {
    return (
        
    <div className='basketcompenent'>
        <div className='basketdetail'>
        <img src={props.product.productPic}></img>
        <p>{props.product.productName}</p>
        <p>{props.product.currentPrice} TL</p>
        </div>
        <div className='count1'>
            <div className='count2'>
            <button className='addbutton' onClick={() => {
                let tempBasket=[...props.basket];
                props.product.count++;
            props.setBasket(tempBasket);
            }}>+</button>
        <p className='count3'>{props.product.count} Adet</p>
            <button className='delbutton' onClick={() => {
                let tempBasket = [...props.basket];
                    props.product.count--;
                if (props.product.count === 0) {
                    tempBasket = tempBasket.filter(item => item.id !== props.product.id);
                }
                props.setBasket(tempBasket);
            }}>-</button>
            </div>
        <div className='bin' onClick={()=>{
            let tempBasket=[...props.basket];
            tempBasket=tempBasket.filter(item => item.id !== props.product.id); //eşleşmeyeni listeye atıyor eşleşeni siliyor eşleşen seçilen idli ürün çıktı yeni listede yok filtrelendi
            props.setBasket(tempBasket);
        }}><RiDeleteBin5Line/></div>
        </div>
    </div>
        
        
    )
}

export default Basketc