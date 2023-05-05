import React from 'react'
import { BsFillBasketFill } from 'react-icons/bs';
function Navbar(props) {
    return (
        <nav>
        <div className="homepage">Anasayfa</div>
        <div className="products">Ürünler</div>
        <div className="com">İletişim</div>
        <div className={props.sidebar === true ? "basketicon-active" : "basketicon-closed"} onClick={() => {
            if (props.sidebar == true) {
            props.setSidebar(false);
            } else {
            props.setSidebar(true);
            }
        }}><BsFillBasketFill />
        {props.sumcount > 0 && <p className='badge'>{props.sumcount}</p>} 
        </div>
        </nav>
    )
}

export default Navbar