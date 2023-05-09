import React, { useState } from 'react'
import { BsFillBasketFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
function Navbar(props) {
    
    return (
        <nav>
        <div className="homepage">Anasayfa</div>
        <div className="products">Ürünler</div>
        <div className="com">İletişim</div>
        <div className={props.likebar===true ? "hearticon-active": "hearticon-closed"} onClick={()=>{
            if(props.likebar===true){
                props.setLikebar(false)
            }else{
                props.setLikebar(true)
            }
        }}><AiOutlineHeart/></div>
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