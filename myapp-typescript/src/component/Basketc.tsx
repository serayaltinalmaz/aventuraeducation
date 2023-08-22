import { RiDeleteBin5Line } from 'react-icons/ri';
import { useContext } from 'react';
import { BasketContext } from '../Context/BasketContext';
import Button from './Button';
import { BsPlusLg } from "react-icons/bs"
import { AiOutlineMinus } from "react-icons/ai"
import { Product } from '../Context/ProductsContext';


type BasketcProps = {
    changeCSS: boolean;
    product: Product;
};

function Basketc(props: BasketcProps) {
    const { basket, setBasket } = useContext(BasketContext);
    return (
        <div className={`basketcomponent ${props.changeCSS === true && "basketcompenentborder"
            } `}>
            <div className='basketdetail'>
                <img src={props.product.image}></img>
                <p className='productname'>{props.product.title}</p>
                <p>{props.product.price} TL</p>
            </div>
            <div className='count1'>
                <div className='count2'>
                    <Button icon={<BsPlusLg />} className="addbutton" onClick={() => {
                        let tempBasket = [...basket];
                        props.product.count++;
                        setBasket(tempBasket);
                    }} />
                    <p className='count3'>{props.product.count} Adet</p>
                    <Button icon={<AiOutlineMinus />} className="delbutton" onClick={() => {
                        let tempBasket = [...basket];
                        props.product.count--;
                        if (props.product.count === 0) {
                            tempBasket = tempBasket.filter(item => item.id !== props.product.id);
                        }
                        setBasket(tempBasket);
                    }} />
                </div>
                <Button className="bin" icon={<RiDeleteBin5Line />} onClick={() => {
                    let tempBasket = [...basket];
                    tempBasket = tempBasket.filter(item => item.id !== props.product.id); //eşleşmeyeni listeye atıyor eşleşeni siliyor eşleşen seçilen idli ürün çıktı yeni listede yok filtrelendi
                    setBasket(tempBasket);
                }} />
            </div>
        </div>


    )
}

export default Basketc