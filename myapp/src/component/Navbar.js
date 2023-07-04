import React, { useContext } from 'react'
import NavlinkComponent from './NavlinkComponent';
import { EventContext } from '../EventContext';
import { BasketContext } from '../BasketContext';
import { BsFillBasketFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
function Navbar() {
    const{sumcount, likebar, setLikebar}=useContext(EventContext);
    const{sidebar,setSidebar,}=useContext(BasketContext);
    return (
        
        <div className='navbardesign'>
            <div className="logoname">LOGO</div>
            <div className='navnav'>
            <NavlinkComponent to="/homepage" label="Anasayfa"  />
            <NavlinkComponent to="products" label="Ürünler" />
            <NavlinkComponent to="/comm" label="İletişim" />
            <NavlinkComponent to="/manage" label="İndirimleri Yönet" />
            </div>
            <div className='navbaricons'>
            <div className={likebar === true ? "hearticon-active" : "hearticon-closed"} onClick={() => {
                    if (likebar === true) {
                        setLikebar(false)
                    } else {
                        setLikebar(true)
                    }
                }}><AiOutlineHeart /></div>
                <div className={sidebar === true ? "basketicon-active" : "basketicon-closed"} onClick={() => {
                    if (sidebar == true) {
                        setSidebar(false);
                    } else {
                        setSidebar(true);
                    }
                }}><BsFillBasketFill />
                    {sumcount > 0 && <p className='badge'>{sumcount}</p>}
                </div> 
            </div>
        </div>
    )
}

export default Navbar